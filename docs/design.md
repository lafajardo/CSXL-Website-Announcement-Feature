Title & Team: XL News and Announcement System, D6

  

Overview: Currently, asking KMP is the only way to announce important information to fellow CS students, which is inefficient and limits the number of messages we can send. This limit in communication hinders the UNC students from forming a more coherent community. By allowing verified students to send public announcements via an announcement system on CSXL, the UNC CS students can establish prompt communication with each other.

  

Key Personas:

1.  Sally Student is a currently enrolled UNC student. She has a PID but does not have administrator privilege to the website.
    

1.  Sally wants to receive timely updates of current happenings on campus. She aims to receive it from our system.
    
2.  Sally may want to send her own announcement, which is not allowed. However, we may create a portal to refer her announcement to admins such that admins can announce it for her.
    

3.  Amy Ambassador is not UNC–aligned, so she does not have a PID. However, she should still be able to use CSXL’s basic functionalities. She should have the same view as Sally Student. She should probably be barred from some exclusive posts for UNC students.
    

1.  Amy’s pursuit and goals are the same as Sally’s.
    

5.  Rhonda Root is an administrator of CSXL. We assume that she has a PID since we should only allow UNC people to be administrators. She should have a different view than Amy Ambassador and Sally Student that contains additional functionalities to perform her administrative tasks.
    

1.  In addition to all the goals and needs of Sally the student,
    
2.  Rhonda wants to enforce community regulations by removing inappropriate news feeds. She aims to do so via her administrator page.
    

User Stories:

As Sally Student, I want to be able to view a news feed on the “homepage” of the XL website.

As Sally Student, I want to be able to view the details of a news feed via a stand alone page by clicking on a news feed on the “homepage.”

As Sally Student, I want to view the details of the organization that publishes the news feed by clicking on the organization button. Other fields that contains relevant information should also contain its respective hyperlink.

As Amy Ambassador, if unauthenticated, I want to be able to load older posts in chronological order.

As Rhonda Root, I want to be able to be exclusively provided a CRUD listing and editor for adding news stories to the database.

As Rhonda Root, I want to be able to create a draft before publishing and be provided an option to view the draft as “users will see it”.

  

Wireframes/Mockups:

[https://www.figma.com/file/QPCtzPHw184KXXku59QD02/Figma-basics?type=design&node-id=1669%3A162202&mode=design&t=MM8kBcu31GhLwr5s-1](https://www.figma.com/file/QPCtzPHw184KXXku59QD02/Figma-basics?type=design&node-id=1669%3A162202&mode=design&t=MM8kBcu31GhLwr5s-1)

  

Sally Student:![](https://lh7-us.googleusercontent.com/DRoWhPTEisBxNa_uVqRBnxT11VViHWcA6eVZP2LvEV1eH_8SSA6g-ybZUI4GPSzm4cHR0lCqe4ndB_OyH6nFXyagQU0AfW8AlogUZlZGZ3NcfQkXa5Lpnc4DQfrIeCf3vUm8HDS8gYgr2dEV34Wo1ZI)

As Sally Student, we want to see the announcements listed in a list.

Rhonda Root (or Authorized Sally Students)

![](https://lh7-us.googleusercontent.com/FJt6d4hVY8soKgimc4P4BVAs1GxIdgfT2FZVvOJX4DfW0KOZoPVdH-G9CrCer8f69ePnIunBqIcce3X--RVQdRARgmFrl7RJ22nGVuN2ps3YiKAv4YG6sVNep-dEUx7s_Mz5gXVWxVDpaoEY5L-8bIs)

As Rhonda Root or Club Presidents, we want to be able to submit an announcement via a form.

For All Users:![](https://lh7-us.googleusercontent.com/ehgi8QTnahc53eMSZGuZCujnCghqfcMG6s6WWAmtWg46hVwRYP65H2iTlhDDhxVs0syXqZbTbqmlAEiwsmTlJzmgJisDFy6ZTZb4qjvSphQH5ehgPJeA33Uc-MTrjBHLYBWZnUpWhRbuh6LngR7tosg)

By Clicking on one of the news feed, we want to see the detail page of one announcement.

Technical Implementation Opportunities and Planning:

1.  Dependencies:
	1. Events: We should seek a way to combine events and announcements pages - maybe by turning them into different views of one “homepage.” Announcements should contain a hyperlink to the corresponding event if the announcement is about that event. The UI of this announcement system can follow the current design of the “Event” page.
    2.  Organizations: In addition, since the announcers are expected to be the clubs, a link to the corresponding organization page should also be added.
    3.  Permission: Our code needs to be compatible with the admin and authentication component of the front end to enable appropriate privilege levels.
    

2.  What planned page components and widgets, per the assigned reading, do you anticipate needing in your features’ frontend?
    1.  Announcement Main Page that allows user to browse all current announcements
    2.  The admin view of this main page should contain buttons for CRUD. By checking the user privilege, the main page displays additional elements that allow CRUD.
    3. Announcement Detail Page that allows users to access detail about one announcement, potentially providing a better UI.
    4.  Announcement Body Widgets: Cards that represent a stand alone announcement on the main page.
    5. Announcement Submission Form: form that creates a new announcement object.
    

3.  What additional models, or changes to existing models, do you foresee needing (if any)?
	1.  As a side quest, we want to implement integration with listserv such that each announcement may trigger an announcement email.
	2. Additional security checks need to be done to ensure that the users do not receive spam emails.
	3.  Users can also customize their email preferences to select the types of emails they wish to receive from each organization.
    

4.  Considering your most-frequently used and critical user stories, what API / Routes do you foresee modifying or needing to add?
	1. Get Announcements. Return a list of currently available announcements. Used by All Personas.
		1. As time goes on, there might be too many announcements to load at one time. We may limit this to only publish 50 announcements, and a button will be added at the bottom of the Announcement main page for users to request more announcements.
	2. Post Announcement. Adds an announcement to the database. Used by authorized personas such as the club president or the admin.
	3. Delete Announcement. Deletes an announcement. Used by the owner of the announcement or the admin.
	4. Update Announcement. Updates an announcement. Used by the owner of the announcement or the admin.
    

5.  What concerns exist for security and privacy of data? Should the capabilities you are implementing be specific to only certain users or roles? (For example: When Sally Student makes a reservation, only Sally Student or Amy Ambassador should be able to cancel the reservation. Another student, such as Sam Student, should not be able to cancel Sally’s reservation.)
	1.  Modifying the current announcements should only be accessible to admin profiles so that unwanted changes/announcements are prevented.
	2.  All users regardless of roles will be able to view the announcements.
