from django.urls import path
from .views import CreateRoomView, RoomView

urlpatterns = [
    path('', RoomView.as_view()),
    path('create-room', CreateRoomView.as_view())
]
