"""Pydantic Model for Announcement"""

from pydantic import BaseModel
from enum import Enum

from backend.models.announcement_state import AnnouncementState
from datetime import datetime

from backend.models.user import User

# from backend.models.user import public_user
from backend.models.organization import Organization


class Announcement(BaseModel):
    id: int
    headline: str
    synopsis: str
    main_story: str

    author: str  # | public_user
    organization: str
    state: AnnouncementState
    slug: str
    image_url: str
    publish_date: datetime
    modification_date: datetime
