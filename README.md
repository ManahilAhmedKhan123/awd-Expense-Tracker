# 💰 Personal Expense Tracker

A simple and modern **Personal Expense Tracker** built with **React + TypeScript**.  
This application allows users to add, edit, delete, search, filter, and analyze their daily expenses. Data is stored in the browser using **LocalStorage**, so expenses remain available after refreshing the page.

---

## 🚀 Features

### ✅ Expense Management
- Add new expenses
- Edit existing expenses
- Delete expenses
- Assign categories to expenses

### 🔍 Search & Filter
- Search expenses by name
- Filter expenses by category:
  - Food
  - Shopping
  - Transport
  - Bills
  - Entertainment
  - Other

### 📊 Expense Summary
Displays useful statistics:

- Total expenses
- Number of expenses
- Average expense amount
- Highlights the biggest expense

### 💾 Data Persistence
- Uses browser **LocalStorage**
- Expenses remain saved after page reload

### 📱 Responsive Design
- Works on desktop, tablet, and mobile devices
- Clean card-based UI

---

# 🛠️ Technologies Used

- **React**
- **TypeScript**
- **CSS3**
- **Vite**
- **LocalStorage API**

---

# 📂 Project Structure

```
expense-tracker/
│
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── public/
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project folder

```bash
cd expense-tracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173/
```

---

# 📖 How To Use

## Add Expense

1. Enter the expense name
2. Enter the amount
3. Select a category
4. Click **Add Expense**

Example:

```
Name: Grocery Shopping
Amount: 50
Category: Food
```

---

## Edit Expense

1. Click the **Edit** button
2. Update the details
3. Click **Update Expense**

---

## Delete Expense

Click the **Delete** button to remove an expense permanently.

---

## Search Expenses

Use the search box to quickly find expenses by name.

Example:

```
Search: Food
```

---

## Filter Expenses

Choose a category from the dropdown to display only related expenses.

Example:

```
Filter → Transport
```

---

# 📊 Expense Analysis

The dashboard automatically calculates:

### Total

The sum of all visible expenses.

Example:

```
Total: $250.00
```

### Average

The average amount per expense.

Formula:

```
Total Amount / Number of Expenses
```

### Biggest Expense

The highest expense is highlighted with a red border.

---

# 🧠 Application Logic

### Adding Expense

A new expense object is created:

```ts
{
 id: unique_id,
 label: expense_name,
 amount: expense_amount,
 category: expense_category
}
```

and added to the expense list.

---

### Editing Expense

The selected expense is updated using its unique ID.

---

### Deleting Expense

Expenses are removed by filtering out the selected ID.

---

### LocalStorage

Expenses are automatically saved:

```javascript
localStorage.setItem(
  "expenses",
  JSON.stringify(expenses)
);
```

and loaded when the application starts.

---

# 🎨 UI Features

- Modern card layout
- Smooth button hover effects
- Responsive mobile layout
- Category labels
- Empty state message
- Highlighted biggest expense

---

# 🔮 Future Improvements

Possible upgrades:

- User authentication
- Backend database integration
- Expense charts and graphs
- Monthly reports
- Export expenses to CSV/PDF
- Dark mode
- Budget limits and alerts

---

# 👨‍💻 Author

Manahil Ahmed Khan 

---

# 📄 License

This project is open-source and available for learning and personal use.
