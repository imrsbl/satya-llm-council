# Notion Integration Setup Guide

Follow these steps to connect Satya LLM Council to your Notion workspace.

## 1. Create a Notion Integration
1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations).
2. Click **+ New integration**.
3. Name it "Satya Researcher" (or similar).
4. Select the workspace you want to use.
5. In **Capabilities**, ensure "Insert content" is checked.
6. Click **Submit**.
7. Copy the **Internal Integration Token** (starts with `secret_`). Use this in Satya's settings as the **Notion API Key**.

## 2. Prepare Your Database
1. Create a new **Database** in Notion (Full page or Inline).
2. Add the following properties (case-sensitive):
    - **Name** (Title) - *Existing by default*
    - **Mode** (Select) - *For categorization*
    - **Tags** (Multi-select)
    - **Date** (Date)
3. Copy your **Database ID**:
    - If your database URL is `https://www.notion.so/my-workspace/a8aec43384f447ed84390e90ed3df8b0?v=...`, the ID is `a8aec43384f447ed84390e90ed3df8b0`.

## 3. Connect Integration to Database
1. Open your Notion database page.
2. Click the **...** (three dots) in the top right corner.
3. Scroll down to **Add connections**.
4. Search for your integration name ("Satya Researcher") and select it.
5. Click **Confirm** to allow the integration to access the database.

## 4. Configure Satya
1. Open Satya LLM Council.
2. Open **Settings** (Gear icon).
3. Paste your **Notion API Key** and **Notion Database ID**.
4. Click **Save Settings**.

## 5. Export Research
1. Run any research session (Council, DxO, Ensemble, or Super Chat).
2. In the Results panel, click **Export** -> **🚀 Send to Notion**.
3. You will see a "Success!" message once the page is created in your database.
