   M S B A M L   `   `   `  ����  MerchantService.POS%    MerchantService.POS.LoginScreen   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     6F   X TXceed.Wpf.Toolkit, Version=3.0.0.0, Culture=neutral, PublicKeyToken=3e4669d2f30244f47toolkit)http://schemas.xceed.com/wpf/xaml/toolkit  5   	     � Title$  Login��5   	   $	��320��6   $	��550��6$    � 
ResizeMode$ NoResize=�60    � WindowStartupLocation$ CenterScreen=�6F    J� InputBindings 5      �� 5	   
   
 �� Key$ Enter��6    �� Command 6!   �� *LoginCommand+ �� CommandParameter 6B   ��  �� ElementName$ txtPassword��6y    � 	Resources 5         	BoolToVis��%   &	        �� 5   
   6'   5      .��5      %  Xceed.Wpf.Toolkit.BusyIndicator  	   BusyContent$	 Authenticating��66   
   IsBusy
 6   �� *IsBusy+.��5      �� -   5         ��Name$ 	loginForm��5       �� Orientation$ 
Horizontal=�6$   $��0q�6>   ���	#FFEFF0F2.+�5   
   �� $ Vertical=�6   |�.  $��20q�6>   .+�5      �� -   5         ��Name$ lblError��5      
���  ��$��30��6�   y�6&   �� *isAuthenticated+ �� 	Converter# [   �� FallbackValue$  ��6�   �� 5      $ 
Horizontal=�6   $��0,20,0,0q�62   .+�5      �� -   5        $ lblUserName��5      $��Username��61   $
��Left=�6D   $��28��6_   $��13(�6k   $��Center=�6y   $��75��6�   $��0��6�   �� 5      -   5         ��Name$ txtUserName��5   �   $	��180��6   $��35��6*   $��Center=�66   
������ $��14(�6r   $��1��6�   ��6�   �� *
UserName+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=�6�   5      �� 5      $ 
Horizontal=�6   $��0,10,0,0q�62   .+�5      �� -   5        $ lblPassword��5      $��Password��61   $
��Left=�6D   $��28��6_   $��13(�6k   $��Center=�6z   $��75��6�   G� 5      -   5         G�Name$ txtPassword��5   v   $	��180��6"   $��Center=�6.   
������ $��35��6j   $��14(�6�   $��2��6�   6�   5      �� 5      $ 
Horizontal=�6   $��0,10,0,0q�62   .+�5      �� -   5        $ lblLanguage��5      $��Language��61   $
��Left=�6D   $��28��6_   $��13(�6k   $��Center=�6z   $��75��6�   �� 5      -   5         ��Name$ txtLanguage��5   s   $	��180��6   $��Center=�6+   
������ $��35��6g   $��14(�6�   $��3��6�    �� DisplayMemberPath$
 Name��6�    �� SelectedValuePath$ Id��6�   ��6�   ��  �� Path$ LanguageList� �� SelectedValue 6�   �� $ Language�6'  5      �� 5      -	   5         ��Name$ btnLogin��5   �   $��	20,20,0,0q�6   $	��120��6,   $��35��68   ���	#FFB44F3D$��Login��6\   
�������$
��Bold"�6�   $��3��6�   ��6�   �� *LoginCommand+��6�   �� $ txtPassword��5!      �� 5#   
   $��20q�6   .+�5$      �� $#��.\Resource\more-megastore.jpg��6   $	��150��6<   6L   5%      5'      5(      5)      