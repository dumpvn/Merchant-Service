   M S B A M L   `   `   `  ����   MerchantService.POS%    MerchantService.POS.SuspendBill   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml       � Title$  Suspend Bill��
 � Tag$ suspendbill��$	��300��$	��400�� � WindowStartupLocation$ CenterScreen=� � 
ResizeMode$ NoResize=� � WindowStyle$ 
ToolWindow=�   WindowStyle1#���    J� InputBindings �� 
 �� Key$ F4�� �� Command �� *CancelCommand+�� $ F2�� �� *SubmitCommand+.��� ���	#FFEFF0F2.+��� -    ��Name$ stackPanelMain��$��Center=�$��10q�.+��� -   	 ��Name$	 lblCustonerNo��$ referencepos��$��	Reference��$��14.66(�$	��100��$��40��$
��Left=�$��	30,40,0,0q�$��Center=��� -   
 ��Name$
 txtReferenceNo��
������ |�. $��Center=�$��80��$	��288�� �� TextWrapping$
 Wrap=�$
��Auto=�$��16(����� *ReferenceName+ �� UpdateSourceTrigger$ PropertyChanged=��� 
���  ��$��14(�$��Center=����� *ValidationMessage+��  �� Orientation$ 
Horizontal=�$��Center=�$��0,10,0,0q�.+��� $ 
Horizontal=�.+��� $ 	submitpos��$��14(�$��Submit��$��60��$��35��
����������	#FF28759F$��Right=�$��Center=�$��Center=��� $��14(�$
��(F2)��$��50��$��35��
����������	#FF28759F$
��Left=�$��Center=�$��Center=��� $ 
Horizontal=�.+��� $ 	cancelpos��$��14(�$��Cancel��$��60��$��35��
����������	#FFB44F3D$��Right=�$��Center=�$��Center=�$��10,0,0,0q��� $��14(�$
��(F4)��$��50��$��35��
����������	#FFB44F3D$
��Left=�$��Center=�$��Center=�$��0,0,0,0q�