   M S B A M L   `   `   `  ����  MerchantService.POS     MerchantService.POS.LogOut   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  LogOut��5   	   $	��300��6   $	��400��6%   
 � Tag$ 	logoutpos��61    � WindowStartupLocation$ CenterScreen=�6A    � 
ResizeMode$ NoResize=�6f    � WindowStyle$ 
ToolWindow=�6|    J� InputBindings 5      �� 5   
   
 �� Key$ F4��6    �� Command 6   �� *CancelCommand+6B   �� 5   
   $ F2��6    6   �� *KeepSessionCommand+6G   �� 5   
   $ F1��6    6   �� *EndSessionCommand+6F   .��5
      � ���	#FFEFF0F2.+�5   
   �� -   5         ��Name$ stackPanelMain��5      $��10q�6-   .+�5      � $��10,50q�6   	 � ColumnDefinitions	 5      �� 5      $	��190 �6   6&   �� 5      $��* �6   6$   
 � RowDefinitions
 5      �� 5      $��40 �6   6$   �� 5      $��40 �6   6#   �� 5      $��40 �6   6#   .+�5      �� $ endsessionlogoutpos��6   $��End Session And LogOut��62   $��14.66(�6S   $��0��6d   $��0��6q   $��7q�6�   6�   �� 5      $ keepsessionlogoutpos��6   $��Keep Session And LogOut��63   $��14.66(�6U   $��1��6f   $��0��6s   $��7q�6�   6�   �� 5      $ 	cancelpos��6   $��Cancel��6(   $��2��69   $��14.66(�6F   $��0��6W   $��7q�6g   6u   �� 5      $��14(�6   $
��(F4)��6&   $
��Bold"�65   $��Center=�6G   $��Center=�6d   $��50��6   $��35��6�   
����������	#FFB44F3D$��Center=�5   ,   $��Center=�6P   $��2��5      $��1��6%   �� 5      $��14(�6   $
��(F1)��6&   $
��Bold"�65   $��Center=�6G   $��Center=�6d   $��50��6   $��35��6�   
����������	#FF28759F$��Center=�5   ,   $��Center=�6P   $��0��5      $��1��6%   �� 5      $��14(�6   $
��(F2)��6&   $
��Bold"�65   $��Center=�6G   $��Center=�6d   $��50��6   $��35��6�   
����������	#FF28759F$��Center=�5    ,   $��Center=�6P   $��1��5!      $��1��6%   5"      5#      5$      5%      