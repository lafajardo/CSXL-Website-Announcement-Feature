"""Pydantic Model for Announcement"""

from pydantic import BaseModel
from enum import Enum

from backend.models.announcement_state import AnnouncementState
from datetime import datetime

from backend.models.user import User

class Announcement(BaseModel):
    id: int
    headline: str
    synopsis: str
    main_story: str
    author: str
    organization: str | None
    organization_id: int | None
    state: AnnouncementState
    slug: str
    image_url: list[str] = []
    publish_date: datetime
    modification_date : datetime
    user: User

