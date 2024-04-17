"""Mock data for Announcement"""

import pytest
from sqlalchemy.orm import Session

from ....entities.announcement_entity import AnnouncementEntity

from ....models.announcement import Announcement
from ....models.announcement_state import AnnouncementState

from ..reset_table_id_seq import reset_table_id_seq
import datetime

from ..user_data import user

announcement1 = Announcement(
    id=1,
    headline="Headline1",
    synopsis="synopsis1",
    main_story="main_story1",
    author="author1",
    organization="organization1",
    #organization_id=1,
    state=AnnouncementState.PUBLISHED,
    slug="slug1",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)
announcement2 = Announcement(
    id=2,
    headline="Headline2",
    synopsis="synopsis2",
    main_story="main_story2",
    author="author2",
    organization="organization2",
    #organization_id=2,
    state=AnnouncementState.PUBLISHED,
    slug="slug2",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)
announcement3 = Announcement(
    id=3,
    headline="Headline3",
    synopsis="synopsis3",
    main_story="main_story3",
    author="author3",
    organization="organization3",
    #organization_id=3,
    state=AnnouncementState.PUBLISHED,
    slug="slug3",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)

announcement4 = Announcement(
    id=4,
    headline="Headline4",
    synopsis="synopsis4",
    main_story="main_story34",
    author="author4",
    organization="organization4",
    #organization_id=4,
    state=AnnouncementState.PUBLISHED,
    slug="slug4",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)

announcement5 = Announcement(
    id=5,
    headline="Headline5",
    synopsis="synopsis5",
    main_story="main_story5",
    author="author5",
    organization="organization5",
    #organization_id=5,
    state=AnnouncementState.PUBLISHED,
    slug="slug5",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)


announcements = [announcement1, announcement2, announcement3]


def insert_fake_data(session: Session):
    """Inserts fake announcement data into the test session"""
    global announcements

    entities = []
    for announcement in announcements:
        announcement_entity = AnnouncementEntity.from_model(user, announcement)
        session.add(announcement_entity)
        entities.append(announcement_entity)

    reset_table_id_seq(
        session, AnnouncementEntity, AnnouncementEntity.id, len(announcements) + 1
    )

    session.commit()


@pytest.fixture(autouse=True)
def fake_data_fixture(session: Session):
    """Insert fake data the session automatically when a test is run.
    Note:
        This function runs automatically for each test due to the fixture property `autouse=True`.
    """
    insert_fake_data(session)
    session.commit
    yield
