import * as React from "react";
import style from './Dashboard.css';

function Card({ borderColor, bgColor, imageSrc, title, value, description, viewText, altText }) {
  return (
    <article className="card" style={{ borderColor, backgroundColor: bgColor }}>
      <div className="card-header">
        <img src={imageSrc} alt={altText} className="card-img" />
        <h2 className="card-value">{value}</h2>
        <p className="card-title">{title}</p>
      </div>
      <div className="card-footer">
        <span className="card-view-text"><a href="#" className="link-text">{viewText}</a></span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/756c414269a215514297154b085d87a50de4ddb17649baf6c9a306c311aeb3fd?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="" className="card-view-icon" />
      </div>
    </article>
  );
}

export default function Dashboard() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a9d789f882e264c6147f22c9098045cccac58ca47b5236bf41bb05030906c9?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="Stockspital" className="header-logo" />
            <div className="header-name">Stockspital</div>
          </div>
          <div className="header-center">Spital Sf. Maria</div>
          <div className="header-right">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e038ee69d5e007292339b72556c5ec5e57b20ff249d1a7e300aae51ba5b3bf2?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="Notifications" className="header-notification-icon" />
            <div className="header-notification-text">Notifications</div>
            <div className="header-notification-count">01</div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="intro">
          <h1 className="intro-title">Dashboard</h1>
          <p className="intro-description">A quick data overview of the inventory.</p>
        </section>
        <section className="cards">
          <Card
            borderColor="rgba(1, 167, 104, 1)"
            bgColor="rgba(1, 167, 104, 0.3)"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1c2839e7a18d51d5dc801d3ae6a13969314146eaf79a3110e2be3464e7e499a6?apiKey=166a782ca6344aad902f23b81529b6b9&"
            altText="Good Inventory Status"
            title="Inventory Status"
            value="Good"
            viewText="View Detailed Statistic"
          />
          <Card
            borderColor="rgba(254, 214, 0, 1)"
            bgColor="rgba(254, 214, 0, 0.3)"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7aec50645de34d85a4de3ccc837680bef90c56fa4c8f934829eb39524af505c9?apiKey=166a782ca6344aad902f23b81529b6b9&"
            altText="Budget"
            title="Budget : Jan 2022"
            value="Rs. 8,55,875"
            viewText="View Detailed Statistic"
          />
          <Card
            borderColor="rgba(3, 169, 245, 1)"
            bgColor="rgba(3, 169, 245, 0.3)"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/cc25f37816e52a72aff5424df40072bae91c357c6930dae607d336deb2c7b50e?apiKey=166a782ca6344aad902f23b81529b6b9&"
            altText="Medicines Available"
            title="Medicines Available"
            value="298"
            viewText="Visit Inventory"
          />
          <Card
            borderColor="rgba(240, 72, 62, 1)"
            bgColor="rgba(240, 72, 62, 0.3)"
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7d5e99b8a57a2b6420d6e98a536c93ae92a5f53b551554fa1920c86b1948f6d9?apiKey=166a782ca6344aad902f23b81529b6b9&"
            altText="Medicine Shortage"
            title="Medicine Shortage"
            value="01"
            viewText="Resolve Now"
          />
        </section>
        <section className="sections">
          <article className="section">
            <div className="section-header">
              <h2 className="section-title">Inventory</h2>
              <div className="section-actions">
                <span className="section-action-text"><a href="/inventory" className="link-text">Go to Inventory page</a></span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d707919ce2949ab78f4afc7d7275155614906edba94e9e1a55216280ff9e2cc?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="" className="section-action-icon" />
              </div>
            </div>
            <div className="section-divider" />
            <div className="section-content">
              <div className="section-item">
                <h3 className="section-value">152</h3>
                <p className="section-description">Total no of Medicines</p>
              </div>
              <div className="section-item">
                <h3 className="section-value">100</h3>
                <p className="section-description">Illnesses</p>
              </div>
            </div>
          </article>
          <article className="section">
            <div className="section-header">
              <h2 className="section-title">Quick Report</h2>
              <div className="section-actions">
                <span className="section-action-text">January 2022</span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/57c9dc11e65aa7ca10e40536198477735aa6783a5c6b26a8719815fc6b83eab2?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="Report Date" className="section-action-icon" />
              </div>
            </div>
            <div className="section-divider" />
            <div className="section-content">
              <div className="section-item">
                <h3 className="section-value">1,856</h3>
                <p className="section-description">Medicines Consumed</p>
              </div>
              <div className="section-item">
                <h3 className="section-value">5,288</h3>
                <p className="section-description">Invoices Generated</p>
              </div>
            </div>
          </article>
          <article className="section">
            <div className="section-header">
              <h2 className="section-title">My Hospital</h2>
              <div className="section-actions">
                <span className="section-action-text"><a href="#" className="link-text">Go to Hospital page</a></span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d707919ce2949ab78f4afc7d7275155614906edba94e9e1a55216280ff9e2cc?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="" className="section-action-icon" />
              </div>
            </div>
            <div className="section-divider" />
            <div className="section-content">
              <div className="section-item">
                <h3 className="section-value">10</h3>
                <p className="section-description">Total no of Suppliers</p>
              </div>
              <div className="section-item">
                <h3 className="section-value">47</h3>
                <p className="section-description">Total no of Workers</p>
              </div>
            </div>
          </article>
          <article className="section">
            <div className="section-header">
              <h2 className="section-title">Patients</h2>
              <div className="section-actions">
                <span className="section-action-text"><a href="#" className="link-text">Go to Patients page</a></span>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d707919ce2949ab78f4afc7d7275155614906edba94e9e1a55216280ff9e2cc?apiKey=166a782ca6344aad902f23b81529b6b9&" alt="" className="section-action-icon" />
              </div>
            </div>
            <div className="section-divider" />
            <div className="section-content">
              <div className="section-item">
                <h3 className="section-value">845</h3>
                <p className="section-description">Total no of Patients</p>
              </div>
              <div className="section-item">
                <h3 className="section-value">Paracetamol</h3>
                <p className="section-description">Frequently used item</p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}