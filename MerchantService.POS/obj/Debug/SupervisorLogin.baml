   M S B A M L   `   `   `  ����  MerchantService.POS)    #MerchantService.POS.SupervisorLogin   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Supervisor Authentication��5   	   
 � Tag$  supervisorauthorizationpos��6+   $	��300��6L   $	��400��6Y    � WindowStartupLocation$ CenterScreen=�6e    � 
ResizeMode$ NoResize=�6�    � WindowStyle$ 
ToolWindow=�6�    J� InputBindings 5      �� 5   
   
 �� Key$	 F11��6    �� Command 6   �� *CancelCommand+6C   �� 5   
   $	 F10��6    6   �� *SubmitCommand+ �� CommandParameter 6A   �� 	 �� ElementName$	 txtPassword��6x   �� 5   
   $ Enter��6    6!   �� *SubmitCommand+ 6C   �� $	 txtPassword��6z   .��5
      � $��0q�6   ���	#FFEFF0F2.+�5   
   �� 
 �� Orientation$
 Vertical=�6   $��Center=�6,   |�.  $��20q�6[   .+�5      �� -   5         ��Name$ lblCustonerNo��5   5   $  supervisorauthorizationpos��6   $��Supervisor Authorization��6L   $��14.66(�6o   $	��170��6�   $��40��6�   $
��Left=�6�   $��30,0,0,0q�6�   $��Center=�6�   6�   �� 5      $
 
Horizontal=�6   $��0,10,0,0q�62   .+�5      �� -   5        $ lblUserName��5   *   $ usernamepos��6   $��Username��6?   $
��Left=�6R   $��28��6m   $	��Top=�6y   $��75��6�   $��0��6�   �� 5      -   5         ��Name$ txtUserName��5   ~   $��Center=�6   $	��200��6<   $��35��6H   
������ $
��12.5(�6n   $��1��6�   ��6�   �� *
UserName+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=�6�   5      �� 5      $
 
Horizontal=�6   $��0,10,0,0q�62   .+�5      �� -   5        $ lblPassword��5   *   $ passwordpos��6   $��Password��6?   $
��Left=�6R   $��28��6m   $	��Top=�6y   $��75��6�   G� 5      -   5         G�Name$ txtPassword��5   r   $��Center=�6   $	��200��6@   
������ $��35��6f   $
��12.5(�6�   $��2��6�   6�   5      �� 5      $��0,10,0,0q�6   $��2��6G   $��12(�6T   
���  ��$��0��6s   $��2��6�   $��25��6�   $	��240��6�   ��6&   �� *ErrorMessage+6�   �� 5      $
 
Horizontal=�6   $��Center=�62   $��0,10,0,0q�6O   .+�5      �� $
 
Horizontal=�6   .+�5      �� $ 	submitpos��6   $��14(�6,   $��Submit��6:   $��60��6K   $��35��6V   
����������	#FF28759F$��Right=�5   ,   $��Center=�6O   $��Center=�5      �� 5      $��14(�6   $��(F10)��6*   $��50��6:   $��35��6E   
����������	#FF28759F$
��Left=�5   ,   $��Center=�6N   $��Center=�5      5      �� 5      $
 
Horizontal=�6   .+�5       �� $ 	cancelpos��6   $��14(�6,   $��Cancel��6:   $��60��6K   $��35��6V   
����������	#FFB44F3D$��Right=�5!   ,   $��Center=�6O   $��Center=�5"      $��10,0,0,0q�63   �� 5#      $��14(�6   $��(F11)��6*   $��50��6:   $��35��6E   
����������	#FFB44F3D$
��Left=�5$   ,   $��Center=�6N   $��Center=�5%      $��0,0,0,0q�63   5&      5'      5(      5)      5*      