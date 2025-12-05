# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# Subscription Analytics — Frontend

**Project:** Subscription Analytics (Frontend)

**Tech stack:** React (Vite), React Router, axios, Recharts, Tailwind CSS (optional), plain CSS files (separate CSS as preferred), ESLint, Prettier.

---

## Overview

This repository contains the frontend for the **Subscription Analytics** dashboard. It visualizes subscription metrics (monthly revenue, user status, active/subscribed counts, churn, etc.), shows charts & tables, and provides filtering and export capabilities.

The UI is built with React (Vite) and uses separate CSS files (no inline styles) as requested. It’s responsive and mobile-friendly.

---

## Key features

* Dashboard with Monthly Revenue chart
* Subscription status breakdown (Pie/Donut)
* User / subscription list with pagination and search
* Filters (date range, plan type, status)
* Export table to CSV
* Responsive layout with separate CSS files
* Error handling and loading states

---

## Project structure (recommended)

```
subscription-frontend/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Header/
│  │  │  ├─ Header.jsx
│  │  │  └─ Layout.jsx
│  │  ├─ Sidebar/
│  │  ├─ Dashboard/
│  │  │  ├─ Dashboard.jsx
│  │  │  └─ Dashboard.css
│  │  ├─ Charts/
│  │  │  ├─ RevenueChart.jsx
│  │  │  └─ StatusPie.jsx
│  │  
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  └─ Reports.jsx
│  ├─ services/
│  │  └─ api.js
│  ├─ utils/
│  │  └─ helpers.js
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .env
├─ package.json
└─ README.md
```

---

## Setup (local)

1. **Install Node.js** (v16+ recommended) and npm/yarn.
2. Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd subscription-frontend
npm install
npm run dev
# or
# yarn
```

3. Create a `.env` file in project root with these variables:

```
VITE_API_BASE_URL=http://localhost:8000
VITE_APP_NAME=Subscription Analytics
```

*Vite uses `VITE_` prefix for env vars.*

4. Run the dev server:
cd Backend 
npm run dev
# or
# yarn dev
```

Open `http://localhost:5173` (or port shown) in browser.

---

## Available scripts (package.json)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .js,.jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,css,json,md}\""
  }
}
```

---

## API & data expectations

The frontend expects the backend to provide a few endpoints. These are examples — adapt to your backend:

* `http://localhost:5000/api/subscriptions/add`

  * Response: `{
    "message": "Subscription added successfully",
    "data": {
        "userId": "U1003",
        "userName": "Vinay  Yadav",
        "plan": "Premium",
        "price": 99,
        "status": "cancelled",
        "_id": "69325d2d3683b8157c314b93",
        "createdAt": "2025-12-05T04:18:53.447Z",
        "__v": 0
    }`



---

## Important components (brief)

* `RevenueChart.jsx` — uses `recharts` LineChart or AreaChart. Expects `{name: 'Jan', revenue: 1200}`.
* `StatusPie.jsx` — PieChart that accepts array `{name: 'active', value: 123}` or maps backend `_id`/`count` to this format.
* `SubscriptionTable.jsx` — table with columns (User, Plan, Started, Status, Amount). Supports pagination and CSV export.
* `Filters/DateRangePicker` — date selection component used to fetch filtered results.

---

## Styling

* Use separate `.css` files per component (e.g., `Header.css`, `Dashboard.css`).
* Keep CSS modular and BEM-like naming to avoid clashes.
* The project supports Tailwind optionally — but per your preference we will use separate CSS files to match your earlier request.

---

## Accessibility & responsiveness

* Use semantic HTML (nav, main, header, table, button).
* Ensure charts have aria-labels and tables include `aria-sort` where relevant.
* Layout is responsive: sidebar collapses to hamburger on small screens; charts stack vertically.

---

## Testing

You can add unit tests with Jest + React Testing Library (optional). Example test scripts:

```json
{
  "test": "vitest"
}
```

Add tests in `src/__tests__/`.

---

## Deployment

* Build with `npm run build`.
* Deploy the `dist/` folder to Netlify / Vercel / static host. Configure environment variables on host (e.g., `VITE_API_BASE_URL`).

---

## Troubleshooting

* **Blank chart / 0 data** — confirm backend endpoint returns an array of months and revenue. Log the data in browser console.
* **CORS errors** — enable CORS on backend or use a proxy in dev server.
* **Env vars not loaded** — ensure `VITE_` prefix and restart dev server after changes.

---

## Example: `src/services/api.js`

```js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  timeout: 15000,
});

export default api;
```

---

## Example: mapping status response for Pie chart

```js
// backend returns: [{ _id: 'active', count: 120 }, ...]
const mapStatus = (backendArray) => backendArray.map(item => ({ name: item._id, value: item.count }));
```

---

## Contribution

If you want me to implement specific pages/components, tell me which screens you want (Dashboard, Reports, Users, Settings). I can generate React component files with separate CSS for each.

---

## License

MIT

---

**Need changes?** Tell me if you want the README in English only, or if you want me to generate the actual React components and CSS files next. I can also produce downloadable files (zip) with complete code.


OutPut:-
## Dashboard Screenshot

![alt text](<Screenshot 2025-12-05 101246.png>)

![alt text](<Screenshot 2025-12-05 101258.png>)















































