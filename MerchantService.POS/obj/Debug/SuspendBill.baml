   M S B A M L   `   `   `  ����  MerchantService.POS%    MerchantService.POS.SuspendBill   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Suspend Bill��5   	   
 � Tag$ suspendbillpos��6   $	��300��63   $	��400��6@    � WindowStartupLocation$ CenterScreen=�6L    � 
ResizeMode$ NoResize=�6q    � WindowStyle$ 
ToolWindow=�6�      WindowStyle1#���   6�    J� InputBindings 5      �� 5   
   
 �� Key$ F4��6    �� Command 6   �� *CancelCommand+6B   �� 5   
   $ F2��6    6   �� *SubmitCommand+6B   .��5
      � ���	#FFEFF0F2.+�5   
   �� -   5         ��Name$ stackPanelMain��5      $��Center=�6-   $��10q�6J   .+�5      �� -   5        	 ��Name$	 lblCustonerNo��5   '   $ referencepos��6   $��	Reference��6>   $��14.66(�6R   $	��100��6c   $��40��6o   $
��Left=�6{   $��	30,40,0,0q�6�   $��Center=�6�   6�   �� 5      -   5        
 ��Name$
 txtReferenceNo��5   0   
������ |�. $��Center=�6�   $��80��6�   $	��288��6�    �� TextWrapping$
 Wrap=�6�   $
��Auto=�6�   $��16(�6  ��6H   �� *ReferenceName+ �� UpdateSourceTrigger$ PropertyChanged=�6&  �� 5      
���  ��$��14(�6K   $��Center=�6Y   ��6   �� *ValidationMessage+6   �� 5       �� Orientation$ 
Horizontal=�6   $��Center=�62   $��0,10,0,0q�6O   .+�5      �� $ 
Horizontal=�6   .+�5      �� $ 	submitpos��6   $��14(�6,   $��Submit��6:   $��60��6K   $��35��6V   
����������	#FF28759F$��Right=�5   ,   $��Center=�6O   $��Center=�5      �� 5      $��14(�6   $
��(F2)��6*   $��50��69   $��35��6D   
����������	#FF28759F$
��Left=�5   ,   $��Center=�6N   $��Center=�5      5      �� 5      $ 
Horizontal=�6   .+�5      �� $ 	cancelpos��6   $��14(�6,   $��Cancel��6:   $��60��6K   $��35��6V   
����������	#FFB44F3D$��Right=�5   ,   $��Center=�6O   $��Center=�5      $��10,0,0,0q�63   �� 5      $��14(�6   $
��(F4)��6*   $��50��69   $��35��6D   
����������	#FFB44F3D$
��Left=�5   ,   $��Center=�6N   $��Center=�5       $��0,0,0,0q�63   5!      5"      5#      5$      5%      