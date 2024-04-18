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
    headline="Legit Announcement",
    synopsis="Trust me Bro, I am id 1",
    main_story="Whatsup! I am not a hacker, but id 1; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. ",
    author="Putin",
    organization="organization1",
    # organization_id=1,
    state=AnnouncementState.PUBLISHED,
    slug="slug1",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)
announcement2 = Announcement(
    id=2,
    headline="Hacker Announcement",
    synopsis="Whatsup! I am not a hacker, but the announcement with id 2; I dont want your cash; Just trust me bro.",
    main_story="My main story is a secret. I am a hacker with id 2. I want your cash. Just trust me bro.",
    author="Hecker",
    organization="organization2",
    # organization_id=2,
    state=AnnouncementState.PUBLISHED,
    slug="slug2",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)
announcement3 = Announcement(
    id=3,
    headline="Legit Announcement",
    synopsis="Trust me Bro, I am id 3",
    main_story="Whatsup! I am not a hacker, but id 3; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. Whatsup! I am not a hacker; I dont want your cash; Just trust me bro. ",
    author="Putin",
    organization="organization1",
    # organization_id=1,
    state=AnnouncementState.PUBLISHED,
    slug="slug1",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)

announcement4 = Announcement(
    id=4,
    headline="Hacker Announcement",
    synopsis="Whatsup! I am not a hacker, but the announcement with id 4; I dont want your cash; Just trust me bro.",
    main_story="My main story is a secret. I am a hacker with id 4. I want your cash. Just trust me bro.",
    author="Hecker",
    organization="organization2",
    # organization_id=2,
    state=AnnouncementState.PUBLISHED,
    slug="slug2",
    image_url="asdf",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)


announcements = [announcement1, announcement2, announcement3, announcement4]


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
