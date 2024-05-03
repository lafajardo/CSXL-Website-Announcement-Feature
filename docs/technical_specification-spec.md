# Technical Specification Documentation

## Descriptions and Sample Data Representations

For the Announcement Model representation the following fields apply:

- id: Unique int identifier for the Announcement. (int)
- headline: The main title of the Announcement. (str)
- synopsis: A brief summary of the Announcement which provide readers an overview of the main_story. (str)
- main_story: The main story that viewers will be provided. (str)
- author: A string that provides the name of the person who wrote. (str)
- organization: A string that is optional that can link an announcement back to a specific organization. (str)
- state: A enumeration that with three different states to differentiate from PUBLISHED, DRAFT, ARCHIVED. (enum: AnnouncementState)
- slug: Unique string url that is used in the URL instead of the announcement id. (str)
- image_url: A string that lets the person who creates an announcement add an image for the Announcement. (str)
- publish_date: The time at which the announcement was published/created. (datetime)
- modification_date: The time at which the announcement was modified/edited. (datetime)

The following is an example of a data representation:

CSXL_Announcement = Announcement(
id=1,
headline="CSXL Now Open!",
synopsis="The CSXL is now open to room reservations!",
main_story="After months of renovations the CSXL is now open for students to collaborate and reserve rooms by going to the UNC CSXL wesbite.",
author="Admin",
organization="CSXL",
state=AnnouncementState.PUBLISHED,
slug="csxl-open",
image_url="https://media.licdn.com/dms/image/C4E0BAQHIh2X-IwZD0A/company-logo_200_200/0/1673904264231?e=2147483647&v=beta&t=2KccZnZ1YsdpRH-yTTlxqKij6LJwT4P5sLWwbkGvefw",
publish_date=datetime.datetime.now(),
modification_date=datetime.datetime.now(),
)

### API routes

The following API routes and their functions allowing us to support our features:

- get_announcements (get): returns a list of the announcements
- get_announcement (get): returns an individual announcement via the provided id
- create_announcement (post): provides the functionality to create an announcement
- update_announcement (put): provides the functionality to update an announcement via the provided id
- delete_announcement (delete): provides the functionality to delete an announcement via the provided id

## Description of underlying database/entry-level representation decisions

- For the database we have id be the primary key and we have choses to keep most of the fields int or strings for simplicity but have chosen to make a few either custom or different. In the database the state column we chose to use an SQLAlchemyEnum from the AnnouncementState pydantic model. Within the database we also have publish_date and modification_date be displays as DateTime imported from sqlalchemy.

## User experience design choice

- We chose to only have there be one image connected to an Announcement due to the process of having a column have lists within them being complicated.
- We also chose to use an enumeration for AnnouncementState instead of using an int represenation because it would reduce the need for validations to be added when that could be solved by using an enum.
- Finally we chose to have publish_date and modification_date be represnted by DateTime using the computer's clock instead of manually being inputed as this reduces the chances of an error occuring from different validations and also is more accurate for our use case.

## Development onboarding/concerns

### Brief guide: Backend

/models

- announcement: Definition of Announcement Pydantic model
- announcement_state: Definition of Announcement State Pydantic model which serves as an Enum

/entities

- announcement_entity: Definition of SQLAlchemy table-backed object mapping entity for Announcement. Here you can find the database model schema and the from_model and to_model methods.

/services

- announcement: Here you can find the AnnouncementService that allows the API to manipulate announcement data in the database.

/api

- announcement: Here you can find the Announcement API routes that are used to create, retrieve, update, and delete Announcements.

/test

- announcement/announcement_test: Here you can find the tests for the different announcement service functions.
- announcement/announcement_test_data: Here you can find the mock data for announcement to be used with verifying that the database works as intended.
- core_data: A modules that serves as a helper to bring data insertion fixtures all in at once including fake announcement data.
- fixtures: Creates a fixture for testing core services including announcement_svc_integration which is used to test the AnnouncementService class with a real AnnouncementService.

### Brief guide: Frontend

/frontend/src/app/announcement

- Directory containing the announcement module

/frontend/src/app/announcement/announcement.model.ts

- file defining the announcement model data structure

/frontend/src/app/announcement/announcement-page

- directory containing the main page of the announcement page

/frontend/src/app/announcement/widget/announcement-card

- widget containing each announcement card that contains a summary of the announcement

/frontend/src/app/announcement/detail

- detail page for each announcement

/frontend/src/app/announcement/new-announcement-form

- submission form that allows for creating, deleting, and updating announcements

/frontend/src/app/announcement/announcement.service.ts

- announcement service that supplies data from the backend
