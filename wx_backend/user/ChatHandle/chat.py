from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
import json
from ..models import GlobalVariables
from ..models import User
from ..models import Patient
from ..models import Guardian
from ..models import Doctor
from wx_backend.LogicManage.Constants import Constants

class SaveChatlist(APIView):
    def post(self, request, format=None):
        """
        通过openid获取对应用户，然后两个用户通过后端作为中转站进行通信，前端处理好聊天记录发送给后端保存
        """
        # 用户的openid
        openid = json.loads(request.body).get('openid')
        opposite_id = json.loads(request.body).get('opposite_id')
        chatlist = json.loads(request.body).get('chatlist')
        identity = json.loads(request.body).get('identity')
        
        sender = None
        receiver = None
            
        if identity == "guardian":
            try:
                sender = Guardian.objects.get(Openid=openid)
            except:
                return Response({
                    "status_code": 401,
                    'code': {
                        "msg": 'false', 
                        "reason":'该监护人不存在',
                        'errid': Constants.ERROR_CODE_NOT_FOUND,
                    }
                })
            sender.Chatlist = chatlist
            sender.Flag = True
            sender.save()
        elif identity == "doctor":
            try:
                sender = Doctor.objects.get(Openid=openid)
            except:
                return Response({
                    "status_code": 401,
                    'code': {
                        "msg": 'false', 
                        "reason":'该医生不存在',
                        'errid': Constants.ERROR_CODE_NOT_FOUND,
                    }
                })
            try:
                receiver = Guardian.objects.get(Guardian_id=opposite_id)
            except:
                return Response({
                    "status_code": 401,
                    'code': {
                        "msg": 'false', 
                        "reason":'该监护人不存在',
                        'errid': Constants.ERROR_CODE_NOT_FOUND,
                    }
                })
            receiver.Chatlist = chatlist
            receiver.Flag = True
            receiver.save()

        return Response({
            "msg": 'success',
            "openid": openid,
        })

class ReturnChatList(APIView):
    def post(self, request, format=None):
        """
        通过openid获取对应用户，然后两个用户通过后端作为中转站进行通信，每一次返回历史聊天记录
        """
        openid = json.loads(request.body).get('openid')
        opposite_id = json.loads(request.body).get('opposite_id')
        identity = json.loads(request.body).get('identity')

        guardian = None
        doctor = None
        chatlist = None
        if identity == "guardian":
            try:
                guardian = Guardian.objects.get(Openid=openid)
            except:
                return Response({
                    "status_code": 401,
                    'code': {
                        "msg": 'false', 
                        "reason":'该监护人不存在',
                        'errid': Constants.ERROR_CODE_NOT_FOUND,
                    }
                })
            chatlist = guardian.Chatlist
        elif identity == "doctor":
            try:
                doctor = Doctor.objects.get(Openid=openid)
            except:
                return Response({
                    "status_code": 401,
                    'code': {
                        "msg": 'false', 
                        "reason":'该医生不存在',
                        'errid': Constants.ERROR_CODE_NOT_FOUND,
                    }
                })
            try:
                guardian = Guardian.objects.get(Guardian_id=opposite_id)
            except:
                return Response({
                    "status_code": 401,
                    'code': {
                        "msg": 'false', 
                        "reason":'该监护人不存在',
                        'errid': Constants.ERROR_CODE_NOT_FOUND,
                    }
                })
            chatlist = guardian.Chatlist
        return Response({
            "msg": 'success', 
            "openid": openid, 
            "chatlist": chatlist,
        })
    
class GuardianFlagFalse(APIView):
    def post(self, request, format=None):
        """
        将监护人数据下的Flag标识置为false
        """
        openid = json.loads(request.body).get('openid')

        guardian = None
        try:
            guardian = Guardian.objects.get(Openid=openid)
            guardian.Flag = False
            guardian.save()
            return Response({
            "msg": 'success', 
            "openid": openid, 
        })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
class DoctorFlagFalse(APIView):
    def post(self, request, format=None):
        """
        将医生数据下的Flag标识置为false
        """
        openid = json.loads(request.body).get('openid')
        guardian_id = json.loads(request.body).get('guardian_id')

        guardian = None
        try:
            guardian = Guardian.objects.get(Guardian_id=guardian_id)
            guardian.Flag = False
            guardian.save()
            return Response({
            "msg": 'success', 
            "openid": openid, 
        })
        except:
            return Response({
                "status_code": 401,
                'code': {
                    "msg": 'false', 
                    "reason":'该监护人不存在',
                    'errid': Constants.ERROR_CODE_NOT_FOUND,
                }
            })
