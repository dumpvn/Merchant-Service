   M S B A M L   `   `   `  ����   MerchantService.POS(    "MerchantService.POS.CustomerWindow   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     $	��260��$	��400��  � WindowStartupLocation$  CenterScreen=�$��Arial)� � 
ResizeMode$ NoResize=� � WindowStyle$ 
ToolWindow=� � Title �� *	PopupText+ � 	Resources    	BoolToVis��%   &	        ��  J� InputBindings �� 
 �� Key$ F3�� �� Command �� *SubmitCommand+�� $ Enter�� �� *SubmitCommand+�� $ F4�� �� *CancelCommand+.���� -    ��Name$ stackPanelMain�����	#FFEFF0F2.+��� ���	#FF000002$��30��$��14.66(�$��Center=�$	��Top=�$��0,40,0,0q�$��Center=����� *	PopupText+�� -   	 ��Name$	 txtCustomerNo��
������ $	��200��$��Center=�$��8q�$��35��
 �� 	MaxLength$
 18��$��14(�$��0,15,0,0q����� *
PopupValue+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=��� $	��290��$��Center=�
���  ��$��0,10,0,0q�$��25������  �� Path$ Message� �� FallbackValue$  ����  �� Orientation$ 
Horizontal=�$��0,10,0,0q�$��Center=�.+��� $ 
Horizontal=�.+��� 
 � Tag$ 	submitpos��$��14(�$��Submit��$��60��$��35��
����������	#FF28759F$��Right=�$��Center=�$��Center=��� $��14(�$
��(F3)��$��50��$��35��
����������	#FF28759F$
��Left=�$��Center=�$��Center=��� $ 
Horizontal=�.+��� $ 	cancelpos��$��14(�$��Cancel��$��60��$��35��
����������	#FFB44F3D$��Right=�$��Center=�$��Center=�$��10,0,0,0q��� $��14(�$
��(F4)��$��50��$��35��
����������	#FFB44F3D$
��Left=�$��Center=�$��Center=�$��0,0,0,0q�