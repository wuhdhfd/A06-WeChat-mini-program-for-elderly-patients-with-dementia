from django.urls import path
from user.views import WeixinLogin
from user.views import ChooseRole

app_name = 'user'   #后续接口的名称

urlpatterns = [
    path('login/', WeixinLogin.as_view(), name='login'),
    path('role/', ChooseRole.as_view(), name='role'),
]