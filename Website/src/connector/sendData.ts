import { getEnvironment } from "../helpers/getEnvironment";

export async function sendData(data: any): Promise<void> {
  console.log("Sending data...", data);

  // For test
  try {
    const endpoint = "http://localhost:3001/user";
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({ id: 1, name: "John", email: "test@test.dk" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    console.log("Data sent successfully", response);
  } catch (error) {
    console.error("Error sending data:", error);
  }

  return;

  try {
    const endpoint = getEnvironment("DB");
    console.log("Endpoint:", process.env.DB, endpoint);
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to send data");
    }

    console.log("Data sent successfully");
  } catch (error) {
    console.error("Error sending data:", error);
  }
}
