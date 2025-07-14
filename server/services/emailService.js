import nodemailer from "nodemailer";

const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const sendOrderNotificationToSellers = async (sellerEmails, orderDetails) => {
  try {
    const transporter = createTransporter();

    const subject = `New Order Received - CPUZ PC Builder`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333; text-align: center; margin-bottom: 30px;">
          New PC Build Order - CPUZ
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px;">
          <h3 style="color: #333; margin-top: 0;">Order Information</h3>
          <p><strong>Order ID:</strong> ${orderDetails.orderId}</p>
          <p><strong>Customer:</strong> ${orderDetails.customerName}</p>
          <p><strong>Customer Email:</strong> ${orderDetails.customerEmail}</p>
          <p><strong>Order Date:</strong> ${new Date(orderDetails.orderDate).toLocaleDateString()}</p>
          <p><strong>Estimated Total Amount:</strong> <span style="color: #28a745; font-size: 18px; font-weight: bold;">Rs ${orderDetails.totalAmount}</span></p>
        </div>

        <div style="margin-bottom: 20px;">
          <h3 style="color: #333;">Components Ordered:</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr style="background-color: #343a40; color: white;">
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Component Type</th>
                <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Product Name</th>
                <th style="padding: 12px; text-align: right; border: 1px solid #ddd;">Estimated Price</th>
              </tr>
            </thead>
            <tbody>
              ${orderDetails.components
                .map(
                  (component) => `
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">${component.componentType}</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${component.name}</td>
                  <td style="padding: 12px; border: 1px solid #ddd; text-align: right; color: #28a745;">Rs ${(component.price * 140).toFixed(2)}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #6c757d; font-size: 12px; margin: 0;">
            © 2025 CPUZ PC Builder. All rights reserved.
          </p>
        </div>
      </div>
    `;

    const textContent = `
      New PC Build Order - CPUZ
      
      Order Information:
      - Order ID: ${orderDetails.orderId}
      - Customer: ${orderDetails.customerName}
      - Customer Email: ${orderDetails.customerEmail}
      - Order Date: ${new Date(orderDetails.orderDate).toLocaleDateString()}
      - Total Amount: $${orderDetails.totalAmount}
      
      Components Ordered:
      ${orderDetails.components.map((component) => `- ${component.componentType}: ${component.name} - $${component.price}`).join("\n")}
      
    `;

    const emailPromises = sellerEmails.map((email) => {
      return transporter.sendMail({
        from: `"CPUZ PC Builder" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: subject,
        text: textContent,
        html: htmlContent,
      });
    });

    const results = await Promise.allSettled(emailPromises);

    const successful = results.filter((result) => result.status === "fulfilled").length;
    const failed = results.filter((result) => result.status === "rejected").length;

    console.log(`Email notification results: ${successful} sent, ${failed} failed`);

    if (failed > 0) {
      console.error(
        "Some emails failed to send:",
        results.filter((result) => result.status === "rejected").map((result) => result.reason)
      );
    }

    return {
      success: successful > 0,
      sent: successful,
      failed: failed,
      total: sellerEmails.length,
    };
  } catch (error) {
    console.error("Error sending email notifications:", error);
    throw new Error("Failed to send email notifications");
  }
};

export const testEmailConfiguration = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log("✅ Email configuration is valid");
    return true;
  } catch (error) {
    console.error("❌ Email configuration error:", error);
    return false;
  }
};
