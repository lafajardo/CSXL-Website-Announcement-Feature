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
    headline="HackNC starts tommorow!!",
    synopsis="The big UNC hackathon is right around the corner!",
    main_story="Get ready for an exhilarating weekend of coding, creativity, and collaboration. HackNC, hosted by the Computer Science organization, is right around the corner. Whether you’re a seasoned hacker or a curious beginner, this event promises exciting challenges, networking opportunities, and innovative solutions. Sharpen your skills, form teams, and let the hacking begin!",
    author="KMP",
    organization="HackNC",
    # organization_id=1,
    state=AnnouncementState.PUBLISHED,
    slug="slug1",
    image_url="https://cs.unc.edu/wp-content/uploads/sites/1265/2023/11/20231028_Bao_HackNC2023-Selects-225-scaled.jpg",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)
announcement2 = Announcement(
    id=2,
    headline="Found cat in Sitterson!",
    synopsis="There is a lost cat found in Sitterson",
    main_story="One of the students here has found a cat on the lower floor near the lobby and we are searching for the owner, if anyone knows any information on who it might belong too please contant us as asap!",
    author="KMP",
    organization="Computer Science",
    # organization_id=2,
    state=AnnouncementState.PUBLISHED,
    slug="slug2",
    image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juvenile_Ragdoll.jpg/800px-Juvenile_Ragdoll.jpg",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)
announcement3 = Announcement(
    id=3,
    headline="Calling All Code Enthusiasts! Join Our CS Club Today!",
    synopsis="Are you passionate about algorithms, data structures, and all things tech? Look no further! Our Computer Science Club is the perfect place for you. Whether you’re a seasoned coder or just starting out, we welcome everyone.",
    main_story="Whether you’re a seasoned coder or just starting out, our club offers workshops, hackathons, guest speakers, project collaborations, and networking opportunities. Dive into tech talks, connect with like-minded peers, and explore the digital realm with us!  Join us to collaborate, learn, and geek out over the latest tech trends.",
    author="CS Club",
    organization="Computer Science",
    # organization_id=1,
    state=AnnouncementState.PUBLISHED,
    slug="slug1",
    image_url="https://cs.unc.edu/wp-content/uploads/sites/1265/2022/02/CS-STUDENT-ORGANIZATIONS-1024x512.png",
    publish_date=datetime.datetime.now(),
    modification_date=datetime.datetime.now(),
)

announcement4 = Announcement(
    id=4,
    headline="New AI Club!",
    synopsis="Unlock the Future with Our AI Club!",
    main_story="Artificial Intelligence (AI) is reshaping our world, from healthcare to transportation, entertainment, and education. If you’re curious about this cutting-edge technology, our AI Club at [School Name] is the place to be! Dive into workshops, coding sessions, and project showcases while connecting with fellow enthusiasts.",
    author="KMP",
    organization="AI Club",
    # organization_id=2,
    state=AnnouncementState.PUBLISHED,
    slug="slug2",
    image_url="https://cfi.iitm.ac.in/assets/AiLogo-965528ca.png",
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
