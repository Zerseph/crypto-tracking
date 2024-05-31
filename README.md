### Project Overview 🚀

#### **Title: Dashboard - Crypto Tracking 📈**

#### **Project Description:**

The "Dashboard - Crypto Tracking" project is a web application developed with React, TypeScript, and Tailwind CSS that allows users to visualize real-time charts of various cryptocurrencies' prices using the Binance API. This application offers an intuitive and visually appealing user interface designed to provide updated information on the cryptocurrency market efficiently and accessibly.

#### **Key Features:**

1. **Real-Time Visualization:**
   - The application displays real-time charts of six selected cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), Binance Coin (BNB), Cardano (ADA), Ripple (XRP), and Litecoin (LTC).
   - Market data is updated every five seconds to provide up-to-date information.

2. **User Interface:**
   - Attractive and modern design using Tailwind CSS.
   - Each cryptocurrency is displayed in an individual card with its symbol and full name.
   - Cards are styled with a white background, rounded border, and shadow to stand out against the background.

3. **Interactive Charts:**
   - Implementation of interactive charts using the `react-apexcharts` library.
   - Each chart displays the cryptocurrency's price over time using a line chart.

4. **Error Handling:**
   - Proper error handling in data retrieval from the Binance API, displaying informative error messages in case of network failures or API issues.

5. **Responsive Design:**
   - The interface is designed to be fully responsive, adapting to different screen sizes, from mobile devices to desktop screens.

6. **Background Customization:**
   - The application includes a customized background image that fits the entire screen, enhancing the dashboard's visual appearance.

7. **Informative Footer:**
   - The footer includes the project title and a copyright notice, as well as the developer's name.

#### **Design Decisions:**

1. **Use of React and TypeScript:**
   - React was chosen for its popularity and efficiency in creating interactive user interfaces.
   - TypeScript was used to improve code quality, providing static typing and better autocomplete, facilitating project development and maintenance.

2. **Styling with Tailwind CSS:**
   - Tailwind CSS was used for interface design due to its flexibility and ability to create modern and responsive layouts with ease.

3. **Integration with the Binance API:**
   - The Binance API was selected as a reliable and up-to-date source of cryptocurrency data.
   - Integration was done using fetch to retrieve real-time price data.

#### **Important Assumptions:**

- It is assumed that the Binance API is reliable and provides accurate real-time data.
- It is expected that users are interested in the six selected cryptocurrencies; however, the application can easily be extended to include more cryptocurrencies in the future.

---

### How to Run the Application 🏃‍♂️💻

To run the "Dashboard - Crypto Tracking" application on your local environment, follow these steps:

#### Prerequisites:
- Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

#### Steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/Zerseph/crypto-tracking.git
   ```

2. **Navigate to the Project Directory:**
   ```
   cd dashboard-crypto-tracking
   ```

3. **Install Dependencies:**
   ```
   npm install
   ```

4. **Run the Application:**
   ```
   npm start
   ```

5. **Access the Application:**
   Once the application has compiled successfully, you can access it in your web browser by visiting `http://localhost:3000`.

And that's it! Now you can enjoy the "Dashboard - Crypto Tracking" application in your own local environment.

This guide provides you with the necessary steps to set up and run the application on your computer. Enjoy exploring the world of cryptocurrencies with this application!

Sincerely, Engineer Agustin Lozada
