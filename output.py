#2025-02-18 06:55:23
�                   �  � d Z ddlZddlZddlZddlZddlZddlZddlZd� Z	 e	�   �          d� Z
d� Zd� Zd� Zd� Zd	� Zd
� Zd� Zd� Zd� Zd� Zd� Zd� Z ej        d�  �        Ze� ed�  �         dS devrAe�                    d�  �        Zed         Zed         Zed         Zed         Z e�   �          dS e�                    d�  �        Z e e�  �        D ]l\  Z!Z" ede!dz   � d��  �         	 e"�                    d�  �        Z#e#d         Ze#d         Ze#d         Z e�   �          �P# e$$ rZ% ee%�  �         Y dZ%[%�edZ%[%ww xY wdS )u�   
name: 酷我音乐 每天1到2元可能会黑号 或则卡提现等 如卡提现黑号就冲VIP

export kwyys=appuid#devid＃q#phone  
�    Nc                  �F   � d} t          | �  �         t          d�  �         d S )Nu�  
    ╔══════════════════════════════════════════════╗
    ║                                              ║
    ║   ██████  ██████  ███    ███                ║
    ║   ██   ██ ██   ██ ████  ████                ║
    ║   ██   ██ ██   ██ ██ ████ ██                ║
    ║   ██   ██ ██   ██ ██  ██  ██                ║
    ║   ██████  ██████  ██      ██                ║
    ║                                              ║
    ║     酷我音乐赚金币程序（注：所有脚本均免费）   ║
    ║                                              ║
    ║     还有其他更多免费的脚本欢迎咨询             ║
    ║     Created by 大大鸣 - V1.0.0               ║
    ║     联系方式: v:xolag29638099                ║
    ║     代挂q群：1025838653                      ║
    ╚══════════════════════════════════════════════╝
    zK===========================================================================)�print)�banners    �<string>�print_bannerr      s+   � ��F�" 
�&�M�M�M�	�
W�X�X�X�X�X�    c                 �  � d}ddddd�}d| d�}t          j        |||�	�  �        }t          j        d
|j        d         �  �        �                    d�  �        }t          j        d|j        d         �  �        �                    d�  �        }t          j        d|j        d         �  �        �                    d�  �        }|||fS )Nz(http://ar.i.kuwo.cn/US_NEW/kuwo/login_kwz*/*zar.i.kuwo.cnz
Keep-Alive�gzip)�Accept�Host�
Connection�Accept-Encoding�ar)�f�q)�headers�paramszuname3=([^;]+)z
Set-Cookie�   zwebsid=([^;]+)zuserid=([^;]+))�requests�get�re�searchr   �group)r   �urlr   r   �response�username�loginSid�loginUids           r   �loginr   %   s�   � �
4�C� ��"�!�� �G� ��� �F�
 �|�C���@�@�@�H��y�*�H�,<�\�,J�K�K�Q�Q�RS�T�T�H��y�*�H�,<�\�,J�K�K�Q�Q�RS�T�T�H��y�*�H�,<�\�,J�K�K�Q�Q�RS�T�T�H��X�x�'�'r   c                  �X   � t          j        dd�  �        } t          j        | �  �         d S )N�   �   )�random�randint�time�sleep)�random_numbers    r   �
randomtimer(   ;   s(   � ��N�2�r�*�*�M��J�}����
�Fr   c                 �8  � d}| ||dddddddddd	�}d
dddddddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r#|d         d         }t	          d|� d��  �         d S |d         d         }	t	          d|	� ��  �         d S ) N�Khttps://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListenr   �signz20130802-14795506463� �100�0zqBiXdGRsLjE%252B80I0ekQ6PIxbE2c%252FKyDCJSZQ7KxXsKHE1vO6SDz%252FKJIoDdVbBBzzmi76q7NTHX6vcx1PrX38%252F7xA%253D%253D�r   r   �appUid�terminal�from�adverId�token�extraGoldNum�clickExtraGoldNum�surpriseType�verificationId�mobile�integralapi.kuwo.cn�
keep-alive�C"Not A(Brand";v="99", "Android WebView";v="121", "Chromium";v="121"�!application/json, text/plain, */*�?1��Mozilla/5.0 (Linux; Android 14; POCO F2 Pro Build/UQ1A.240105.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/121.0.6167.101 Mobile Safari/537.36/ kuwopage�	"Android"�https://h5app.kuwo.cn�cn.kuwo.player�	same-site�cors�empty�gzip, deflate, br�#zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7�r   r   �	sec-ch-uar   �sec-ch-ua-mobile�
User-Agent�sec-ch-ua-platform�Origin�X-Requested-With�Sec-Fetch-Site�Sec-Fetch-Mode�Sec-Fetch-Destr   �Accept-Language�r   r   �   成功�data�obtainu   签到广告>>>�   金币�description�r   r   �json�textr   �
r   r   r0   r   r   r   r   �r_json�adtyperX   s
             r   �	signvideor_   A   s  � �
W�C������)��� �� N��� �F�  &�"�Z�5� � G�)�)�,�%� �!�.�@�� �G�$ �|�C���@�@�@�H��]�]�_�_�F��8�=� � /�����)���.��.�.�.�/�/�/�/�/��V�n�]�3���-��-�-�.�.�.�.�.r   c                 �6  � d}| ||dddddddddd�}d	d
dddddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r#|d         d         }t	          d|� d��  �         d S |d         d         }	t	          d|	� ��  �         d S )Nr*   r   �surprise�70z20130702-14823094126r,   r.   �r   r   r0   r1   r2   �goldNumr3   r4   r6   r7   r8   r9   r;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   rF   rG   �r   rI   r   rJ   rK   rL   rM   rN   rO   rP   rQ   r   rR   rS   rT   rU   rV   u   主页广告>>>rW   rX   rY   r\   s
             r   �Homepagerf   n   s�   � �
W�C�������)�� ����� �F�  #�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � /�����)���.��.�.�.�/�/�/�/�/��V�n�]�3���-��-�-�.�.�.�.�.r   c                 �j  � t           j         �                    �   �         �                    �   �         j        }ddddddddd	�}|�                    �   �         D ]-\  }}||cxk    r	|d
z   k     rn �t          d|� d��  �          n�.d}| |||dddd|� dddd�}	dddddddddddd d!d"�}
t          j        ||	|
�#�  �        }|�                    �   �         }d$|j	        v r"|d%         d&         }t          d'|� d(��  �         n |d%         d)         }t          d'|� ��  �         d*}| ||d+d,d-d.d/dd.d.d.d0�}	dddddddddddd d!d"�}
t          j        ||	|
�#�  �        }|�                    �   �         }d$|j	        v r#|d%         d&         }t          d1|� d(��  �         d S |d%         d)         }t          d1|� ��  �         d S )2Nz00-08z08-10z10-12z12-14z14-16z16-18z18-20z20-24)r   �   �
   �   �   �   �   �   �   u   当前时间处于 u
    时间段z?https://integralapi.kuwo.cn/api/v1/online/sign/new/newBoxFinish�kwplayer_ar_10.7.6.2_qq.apkzkwplayer_ar_10.7.6.2z0.6345674327264215�new�23r.   )r   r   �devIdr0   �source�version�r�actionr%   rd   �extraGoldnumr6   r;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   rF   rG   re   rS   rT   rU   rV   u   时间段开宝箱>>>rW   rX   r*   r   r+   �20130802-13379713291r,   �88r/   u   开宝箱弹窗>>>)
�datetime�nowr%   �hour�itemsr   r   r   rZ   r[   )r   r   rs   r0   �current_hour�time_ranges�
start_hour�
time_ranger   r   r   r   r]   r^   rX   s                  r   �openboxr�   �   s�  � ��$�(�(�*�*�/�/�1�1�6�L� ��������	� 	�K� #.�"3�"3�"5�"5� � ��
�J��� 	� 	� 	� 	�
�Q�� 	� 	� 	� 	� 	��>�
�>�>�>�?�?�?��E�	� L�C�����/�)�!������ �� �F�  #�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � 5�����)���4�f�4�4�4�5�5�5�5��V�n�]�3���3�k�3�3�4�4�4� X�C������)��� ����� �F�  #�Z�5� � G�)�)�,�%� �!�.�@�� �G�  �|�C���@�@�@�H��]�]�_�_�F��8�=� � 2�����)���1�6�1�1�1�2�2�2�2�2��V�n�]�3���0�;�0�0�1�1�1�1�1r   c                 �v   � d}| ||dddddddddd�}d	d
dddddddddddd�}t          j        |||��  �        }d S )Nr*   r   r+   ry   r,   rz   r.   r/   r;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   rF   rG   re   rS   )r   r   )r   r   r0   r   r   r   r   s          r   r+   r+     s�   � � X�C������)��� ����� �F�  #�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H�H�Hr   c                 �L  � d}| ||ddd�}ddddd	d
ddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r!|d         d         }t	          d|� ��  �         n|d         }	t	          d|	� ��  �         t          �   �          d}| ||ddd�}ddddd	d
ddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r"|d         d         }t	          d|� ��  �         d S |d         }	t	          d|	� ��  �         d S )Nz?https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLuckyrp   �free)r   r   r0   rt   �typer;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   zhttps://h5app.kuwo.cn/rF   rG   )r   rI   r   rJ   rK   rL   rM   rN   rO   rP   rQ   �Refererr   rR   rS   rW   rU   �loterrynameu   广告抽奖>>>�msgu   免广告抽奖>>>�video�r   r   rZ   r[   r   r(   r\   s
             r   �drawr�   ,  s�  � �
K�C����/��� �F� #�Z�5� � G�)�)�,�%� �!�+�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � 2�����.���(��(�(�)�)�)�)��U�m���0�;�0�0�1�1�1��L�L�L�
K�C����/��� �F� #�Z�5� � G�)�)�,�%� �!�+�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � /�����.���(��(�(�)�)�)�)�)��U�m���-��-�-�.�.�.�.�.r   c                 �  � d}| ||ddddddddddd�}dd	d
ddddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r"|d         d         }t	          d|� d��  �         n |d         d         }	t	          d|	� ��  �         t          �   �          d}| ||ddddddddddd�}dd	d
ddddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r#|d         d         }t	          d |� d��  �         d S |d         d         }	t	          d |	� ��  �         d S )!Nr*   r   �
videoadver�58r,   r.   )r   r   r0   r1   r2   rd   r3   r4   r5   r6   r7   r8   r9   r;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   rF   rG   re   rS   rT   rU   rV   u   创意视频>>>rW   rX   z20130802-14824211622�110�r   r   r0   r1   r2   r3   r4   r5   r6   r7   r8   r9   �
listenTimeu   创意视频弹窗>>>r�   r\   s
             r   r�   r�   v  s�  � �
W�C���������� ����� �F�" #�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � /�����)���.��.�.�.�/�/�/�/��V�n�]�3���-��-�-�.�.�.��L�L�L� X�C������)��� ������ �F�  #�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � 5�����)���4�f�4�4�4�5�5�5�5�5��V�n�]�3���3�k�3�3�4�4�4�4�4r   c                 �  � d}| ||dddddddddd�}dd	d
ddddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r"|d         d         }t	          d|� d��  �         n |d         d         }	t	          d|	� ��  �         d}| ||dddddddddddd�}t          �   �          dd	d
ddddddddddd�}t          j        |||��  �        }|�                    �   �         }d|j        v r#|d         d         }t	          d|� d��  �         d S |d         d         }	t	          d|	� ��  �         d S ) Nr*   r   �collect�18r,   r.   rc   r;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   rF   rG   re   rS   rT   rU   rV   u   收藏歌曲>>>rW   rX   �60)r   r   r0   r1   r2   rd   r3   r4   r5   r6   r7   r8   r9   r�   u   收藏歌曲弹窗>>>r�   r\   s
             r   r�   r�   �  s�  � �
W�C��������� ����� �F�  #�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � /�����)���.��.�.�.�/�/�/�/��V�n�]�3���-��-�-�.�.�.� X�C���������� ������ �F�  �L�L�L�"�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �|�C���@�@�@�H��]�]�_�_�F��8�=� � 5�����)���4�f�4�4�4�5�5�5�5�5��V�n�]�3���3�k�3�3�4�4�4�4�4r   c                 ��  � g d�}g d�}g d�}d}d}ddddd	d
ddddddddd�}d}	|D �]@}
||	         }||	         }| ||dd|dddddd|
d�}| ||dddd|dddd|
d�}|	dz   }	t          j        |||��  �        }|�                    �   �         }d|j        v r"|d         d          }t	          d!|� d"��  �         n |d         d#         }t	          d!|� ��  �         t          �   �          t          j        |||��  �        }|�                    �   �         }d|j        v r"|d         d          }t	          d$|� d"��  �         n |d         d#         }t	          d$|� ��  �         t          �   �          ��Bd S )%N)�5�10�20�30)�43�57r�   �99)�68r�   r�   r�   r*   r:   r;   r<   r=   r>   r?   r@   rA   rB   rC   rD   rE   rF   rG   rH   r   r   �listenr,   r.   )r   r   r0   r1   r2   rd   r3   r4   r6   r7   r8   r9   r�   z20130802-15030283408r�   r   rS   rT   rU   rV   u   听音乐弹窗>>>rW   rX   u   听音乐>>>r�   )r   r   r0   �times�goldNumsr5   �url2r   r   rd   r%   �goldNumcoin�extraGoldNumcoinr   �params2r   r]   r^   rX   �	response2s                       r   �listentomusicr�   )  s)  � �#�#�#�E�'�'�'�H�+�+�+�L�X�D�
W�C�%�"�Z�5� � G�)�)�,�%� �!�.�@�� �G�" �G�� 3� 3���w�'��'��0�� � ����"���!$�� ���
� 
��  !� ����-��,�!$�� ���
� 
�� �A�+���<��F�G�D�D�D���������x�}�$� 	6��F�^�H�-�F��5�v�5�5�5�6�6�6�6� ��.��7�K��4�{�4�4�5�5�5������L��g�w�G�G�G�	����!�!���y�~�%� 	0��F�^�H�-�F��/��/�/�/�0�0�0�0� ��.��7�K��.��.�.�/�/�/������g3� 3r   c                 ��   � |�d S d}d| ||dd|d�}dddd	d
ddddddddd�}t          j        |||��  �        �                    �   �         }|d         d         }t          d|� ��  �         d S )Nz=https://integralapi.kuwo.cn/api/v1/online/sign/v1/getWithdraw�30002rp   �1)�quotaIdr   r   r0   rt   ru   �phoner:   r;   r<   r=   r>   r@   rA   rB   rC   rD   rE   rF   z$zh-CN,zh;q=0..9,en-US;q=0.8,en;q=0.7)r   r   rI   r   rJ   rL   rM   rN   rO   rP   rQ   r   rR   rS   rU   r[   u   提现2元>>>>>)r   r   rZ   r   )	r   r   r0   r�   r   r   r   r   r[   s	            r   �txr�   u  s�   � �� ���
I�C�����/���� �F� &�"�Z�5� �)�)�,�%� �!�.�4�� �G�& �|�C���@�@�@�E�E�G�G�H��F��F�#�D�	�
"�D�
"�
"�#�#�#�#�#r   c                  �f  � t          t          �  �        \  } }}t          �   �          t          ||t          �  �         t          �   �          t          ||t          �  �         t          �   �          t          ||t          t          �  �         t          �   �          t          ||t          �  �         t          �   �          t          ||t          �  �         t          �   �          t          ||t          �  �         t          �   �          t          ||t          �  �         t          ||t          �  �         d S �N)r   r   r(   r_   r0   rf   r�   rs   r�   r�   r�   r�   )r   r   r   s      r   �taskr�   �  s�   � �#(��8�8� �H�h���L�L�L��h��&�)�)�)��L�L�L��X�x��(�(�(��L�L�L��H�h��v�.�.�.��L�L�L���8�V�$�$�$��L�L�L�	�(�H�f�%�%�%��L�L�L�	�(�H�f�%�%�%��L�L�L��H�h��'�'�'��(�H�f�-�-�-�-�-r   c                 �   � t           j        �                    �   �         5 }t          |�                    d� | �  �        �  �        }d d d �  �         n# 1 swxY w Y   |S )Nc                 �   � t          | � S r�   )r�   )r�   s    r   �<lambda>z&execute_concurrently.<locals>.<lambda>�  s
   � ��T�� r   )�
concurrent�futures�ThreadPoolExecutor�list�map)�tasks�executor�resultss      r   �execute_concurrentlyr�   �  s�   � �	�	�	.�	.�	0�	0� D�H��x�|�|�$:�$:�E�B�B�C�C��D� D� D� D� D� D� D� D� D� D� D���� D� D� D� D��Ns   �%A�A�A�kwyyu   未找到环境变量kwyy�&�#r   ro   �   �
u   =====第u   个账号=====)&�__doc__r   r{   r#   r%   r   �os�concurrent.futuresr�   r   r   r(   r_   rf   r�   r+   r�   r�   r�   r�   r�   r�   r�   �getenvr�   r   �split�kwyysr0   rs   r   r�   �	enumerate�i�kw�kws�	Exception�e� r   r   �<module>r�      s�  ��� �
 ���� ���� ���� ���� 	�	�	�	� 	�	�	�	� � � � �Y� Y� Y�( �����(� (� (�,� � �*/� */� */�Z*/� */� */�Zd2� d2� d2�N%A� %A� %A�TG/� G/� G/�TW5� W5� W5�tX5� X5� X5�rK� K� K�X"$� "$� "$�H.� .� .�"� � � �r�y������ �	�E�
%�&�&�&�&�&���_� ��J�J�s�O�O�E��1�X�F��!�H�E��a��A��!�H�E��D�F�F�F�F�F��J�J�t���E���5�!�!� 
� 
���2���,��1��,�,�,�-�-�-�	��(�(�3�-�-�C���V�F���F�E��A��A��D�F�F�F�F��� 	� 	� 	��E�!�H�H�H��H�H�H�H�����	����
� 
s   �/7D'�'E�,D<�<E