   M S B A M L   `   `   `  ����  MerchantService.POS(    "MerchantService.POS.CustomerWindow   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   $	��260��5   	   $	��400��6     � WindowStartupLocation$  CenterScreen=�6"   $��Arial)�5   	    � 
ResizeMode$ NoResize=�6    � WindowStyle$ 
ToolWindow=�6b    � Title 62   �� *	PopupText+
 � Tag 6N   �� *Tag+ � 	Resources 5         	BoolToVis��%   &	        �� 5   
   6'   5	       J� InputBindings 5
      �� 5   
   
 �� Key$ F3��6    �� Command 6   �� *SubmitCommand+6C   �� 5   
   $ Enter��6    6!   �� *SubmitCommand+6E   �� 5   
   $ F4��6    6   �� *CancelCommand+6B   .��5      �� -   5        	 ��Name$	 stackPanelMain��5      ���	#FFEFF0F2.+�5   
   �� ���	#FF000002$��30��6F   $��14.66(�6R   $��Center=�6c   $	��Top=�6�   $��0,40,0,0q�6�   $��Center=�6�   ��6(   �� *	PopupText+ 6�   �� *Tag+6�   �� 5   
   -   5        
 ��Name$
 txtCustomerNo��5   ,   
������ $	��200��6C   $��Center=�6O   $��8q�6l   $��35��6y    �� 	MaxLength$ 18��6�   $��14(�6�   $��0,15,0,0q�6�   ��6�   �� *
PopupValue+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=�6�   �� 5   
   $	��290��6   $��Center=�6P   
���  ��$��0,10,0,0q�6�   $��25��6�   ��6   ��  �� Path$ Message� �� FallbackValue$  ��6�   �� 5   
    �� Orientation$ 
Horizontal=�6   $��0,10,0,0q�6.   $��Center=�6@   .+�5      �� $ 
Horizontal=�6   .+�5      �� $ 	submitpos��6   $��14(�6(   $��Submit��66   $��60��6G   $��35��6R   
����������	#FF28759F$��Right=�5   ,   $��Center=�6O   $��Center=�5      �� 5      $��14(�6   $
��(F3)��6&   $��50��65   $��35��6@   
����������	#FF28759F$
��Left=�5   ,   $��Center=�6N   $��Center=�5      5      �� 5      $ 
Horizontal=�6   .+�5      �� $ 	cancelpos��6   $��14(�6(   $��Cancel��66   $��60��6G   $��35��6R   
����������	#FFB44F3D$��Right=�5   ,   $��Center=�6O   $��Center=�5      $��10,0,0,0q�63   �� 5       $��14(�6   $
��(F4)��6&   $��50��65   $��35��6@   
����������	#FFB44F3D$
��Left=�5!   ,   $��Center=�6N   $��Center=�5"      $��0,0,0,0q�63   5#      5$      5%      5&      