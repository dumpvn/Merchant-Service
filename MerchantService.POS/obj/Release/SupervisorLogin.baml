   M S B A M L   `   `   `  ����   MerchantService.POS)    #MerchantService.POS.SupervisorLogin   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml       � Title$  Supervisor Authentication��
 � Tag$  supervisorauthorizationpos��$	��300��$	��400�� � WindowStartupLocation$ CenterScreen=� � 
ResizeMode$ NoResize=� � WindowStyle$ 
ToolWindow=� J� InputBindings �� 
 �� Key$	 F11�� �� Command �� *CancelCommand+�� $	 F10�� �� *SubmitCommand+ �� CommandParameter �� 	 �� ElementName$	 txtPassword���� $ Enter�� �� *SubmitCommand+ �� $	 txtPassword��.��� $��0q����	#FFEFF0F2.+��� 
 �� Orientation$
 Vertical=�$��Center=�|�.  $��20q�.+��� -    ��Name$ lblCustonerNo��$  supervisorauthorizationpos��$��Supervisor Authorization��$��14.66(�$	��170��$��40��$
��Left=�$��30,0,0,0q�$��Center=��� $
 
Horizontal=�$��0,10,0,0q�.+��� -   $ lblUserName��$ usernamepos��$��Username��$
��Left=�$��28��$	��Top=�$��75��$��0���� -    ��Name$ txtUserName��$��Center=�$	��200��$��35��
������ $
��12.5(�$��1������ *
UserName+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=��� $
 
Horizontal=�$��0,10,0,0q�.+��� -   $ lblPassword��$ passwordpos��$��Password��$
��Left=�$��28��$	��Top=�$��75��G� -    G�Name$ txtPassword��$��Center=�$	��200��
������ $��35��$
��12.5(�$��2���� $��0,10,0,0q�$��2��$��12(�
���  ��$��0��$��2��$��25��$	��240������ *ErrorMessage+�� $
 
Horizontal=�$��Center=�$��0,10,0,0q�.+��� $
 
Horizontal=�.+��� $ 	submitpos��$��14(�$��Submit��$��60��$��35��
����������	#FF28759F$��Right=�$��Center=�$��Center=��� $��14(�$��(F10)��$��50��$��35��
����������	#FF28759F$
��Left=�$��Center=�$��Center=��� $
 
Horizontal=�.+��� $ 	cancelpos��$��14(�$��Cancel��$��60��$��35��
����������	#FFB44F3D$��Right=�$��Center=�$��Center=�$��10,0,0,0q��� $��14(�$��(F11)��$��50��$��35��
����������	#FFB44F3D$
��Left=�$��Center=�$��Center=�$��0,0,0,0q�