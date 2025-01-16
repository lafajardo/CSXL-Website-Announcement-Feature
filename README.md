# CSXL Website Announcement Feature

The CSXL website offers a dedicated **Announcement (or “News Post”)** feature, enabling students, faculty, and administrators in the Computer Science department to share timely news and updates. This feature is designed to be flexible, user-friendly, and robust, supporting essential functionalities for creating, managing, and displaying announcements.

---

## 📢 Announcement Details

Each announcement includes the following key fields:

- **Headline**: The title of the announcement.
- **Synopsis**: A brief overview or teaser of the content.
- **Main Story**: The full announcement content, written in Markdown for flexibility.
- **Author**: Name of the announcement's creator.
- **Optional Organization**: Indicates the associated group or organization, if applicable.
- **State**: One of three states:
  - `Draft`
  - `Published`
  - `Archived`
- **Identifiers**:
  - **Numeric ID**: Unique database ID.
  - **Slug**: User-friendly URL identifier.
- **Optional Image URL**: Used to visually highlight the announcement on listings.

---

## 📋 Announcement Display

### Feed View
- Announcements are shown in a **feed-like view** on the CSXL homepage.
- Displayed in **reverse chronological order** (most recent first).
- **Pagination** supports browsing older announcements.
- Available to both:
  - **Public users** (unauthenticated)
  - **Logged-in users** (authenticated)

### Detail Pages
- Each announcement has its **own detail page**, accessible via its slug.
- **Access Restrictions**:
  - Draft and Archived announcements are only visible to users with proper permissions.
  - Unauthorized users will see a “not found” message.

---

## 🔐 Admin Interface

The site provides a protected **Administrator Interface** where authorized users can:

- **Create** announcements
- **Edit** announcements
- **Publish** announcements
- **Archive** announcements
- **Delete** announcements

### Features:
- **Form-Based Editors**:
  - Draft posts with ease
  - Upload optional images
  - Set the announcement’s state
  - Specify publication dates
- **Automatic Timestamping**:
  - Ensures consistent `publish_date` and `modification_date`.

---

## 🛠️ Technical Details

### Backend
- **Database**: Announcements are stored using an **SQLAlchemy model**.
- **Validation**: A **Pydantic model** ensures data integrity.
- **API Routes**:
  - **GET**: Retrieve announcements or individual details by ID/slug.
  - **POST**: Create new announcements.
  - **PUT**: Update existing announcements.
  - **DELETE**: Remove announcements.

### Frontend
- **Announcement Module & Service**: Powers interaction with the backend API.
- **Functionality**:
  - List announcements
  - Retrieve individual announcements
  - Create, update, and delete entries

---

## ✅ Testing & Reliability

Comprehensive **test suites** ensure the reliability and maintainability of the announcement feature by validating:

1. **Database Operations**
2. **Service Logic**
3. **API Integrations**

---

This announcement feature integrates seamlessly with the CSXL website, providing a powerful tool for sharing and managing news in the Computer Science department. 🎉
