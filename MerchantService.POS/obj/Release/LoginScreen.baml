   M S B A M L   `   `   `  ����   MerchantService.POS%    MerchantService.POS.LoginScreen   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     @d2http://schemas.microsoft.com/expression/blend/2008     Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     X TXceed.Wpf.Toolkit, Version=3.0.0.0, Culture=neutral, PublicKeyToken=3e4669d2f30244f47toolkit)http://schemas.xceed.com/wpf/xaml/toolkit    � Title$  Login��$	��280��
 � Tag$ loginpos��$	��550�� � 
ResizeMode$ NoResize=� � WindowStartupLocation$ CenterScreen=� J� InputBindings �� 
 �� Key$ Enter�� �� Command �� *LoginCommand+ �� CommandParameter ��  �� ElementName$ txtPassword��	 � 	Resources	    	BoolToVis��%   &	        �� .��%  Xceed.Wpf.Toolkit.BusyIndicator  
   BusyContent$
 Authenticating��   IsBusy �� *IsBusy+.���� -    ��Name$ 	loginForm�� �� Orientation$ 
Horizontal=�$��0q����	#FFEFF0F2.+��� $ Vertical=�|�.  $��20q�.+��� -    ��Name$ lblError��
���  ��$��30��y��� *isAuthenticated+ �� 	Converter# [   �� FallbackValue$  ���� $ 
Horizontal=�$��0,20,0,0q�.+��� -   $ lblUserName��$ usernamepos��$��Username��$
��Left=�$��28��$��13(�$��Center=�$��75��$��0���� -    ��Name$ txtUserName��$	��180��$��35��$��Center=�
������ $��14(�$��1������ *
UserName+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=��� $ 
Horizontal=�$��0,10,0,0q�.+��� -   $ lblPassword��$ passwordpos��$��Password��$
��Left=�$��28��$��13(�$��Center=�$��75��G� -    G�Name$ txtPassword��$	��180��$��Center=�
������ $��35��$��14(�$��2���� -    ��Name$ btnLogin��$ loginpos��$��	20,20,0,0q�$	��120��$��35�����	#FFB44F3D$��Login��
�������$
��Bold"�$��3������ *LoginCommand+���� $ txtPassword���� $��20q�.+��� $#��.\Resource\more-megastore.jpg��$	��150��