   M S B A M L   `   `   `  ����O  Kmscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e0891&clr-namespace:System;assembly=mscorlibSystem  5   	   N JMerchantService.POS, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullS.clr-namespace:MerchantService.POS.UserControls MerchantService.POS.UserControls 5   	   !   MerchantService.POS.AddItem   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   6sys&clr-namespace:System;assembly=mscorlib     5   	   ?Base.clr-namespace:MerchantService.POS.UserControls     5   	     � Title$  Add Item��5   	   $	��550��6   $��Arial)�6&   $	��550��69    � WindowStartupLocation$ CenterScreen=�6H   $	��460��6m    � 
ResizeMode$ NoResize=�5   	   
 � Tag$ UnRegistered Item��6    � WindowStyle$ 
ToolWindow=�67    J� InputBindings 5      �� 5
   
   
 �� Key$ F3��6    �� Command 6   �� *SubmitCommand+6C   �� 5   
   $ F4��6    6   �� *CanelCommand+6A    � 	Resources 5         	BoolToVis	 �� 
TargetType
 �� Property �� Value��%/  &	        '��      �� 5   
   6'   �� 5   
   "	 ��6   .�5      �� 
 � ��$ 15(�6)   �� 5      
 � ��$ 4q�6(   �� 5      
 � ��$ 30��6'   �� 5      
 � ��$	 200��6'   �� 5      
 �@��	MaxLength$ 80��6*   �� 5      
 � ��
 ���� 6,   5      5      .��5      �� -   5         ��Name$ stackPanelMain��5      ���	#FFEFF0F2.+�5   
   � -   5         �Name$ 
grdAddItem��5   "   $��	10,10,0,0q�6    � ColumnDefinitions 5      �� 5      $	��180 �6#   61   �� 5      $	��240 �6#   61    � RowDefinitions 5       �� 5"      $
��Auto �6    �� 5#      $
��Auto �6    �� 5$      $
��Auto �6    �� 5%      $
��Auto �6    �� 5&      $
��Auto �6    �� 5'      $
��Auto �6    �� 5(      $
��Auto �6    �� 5)      $
��Auto �6    �� 5*      $
��Auto �6    .+�5-      �� $��0��63   $��0��6C   $��2��6P   
���  ��$��30��5.   k   ��5-      �� *	ErrorText+y�5.      �� *AddItemErrorVisibility+ �� 	Converter# [  6y   �� 50      $ itemnamepos��6   $��Center=�6&   $��5q�6H   $��	Item Name��6S   $��15(�6g   $��0��6u   $��1��6�   6�   �� 52      -   5         ��Name$ txtItemName��52   �   4  .System.Windows.Automation.AutomationProperties   AutomationId$ itemname��6   $��15(�6C   $��35��6Q   $��4q�6]   
������  �� 	MaxLength$ 80��6�   $��5q�6�   $	��200��6�   $��1��53      $��1��6&   ��52   �   �� *
ItemName+ �� UpdateSourceTrigger$ PropertyChanged=� �� Empty �� TargetNullValue# Z 53   &   �� 55      $ itemcodepos��6   $��Center=�6&   $��5q�6H   $��15(�6S   $��	Item Code��6a   $��0��6v   $��2��6�   6�   �� 57      -   5        $ txtItemCode��57   �   $ itemcode��6   $��15(�6C   $��35��6Q   $��4q�6]   
������ $ 80��6�   $��5q�6�   $	��200��6�   $��1��58      $��2��6'   ��57   �   �� *
ItemCode+$ PropertyChanged=�# Z 58   8   �� 5:      $ 
barcodepos��6   $��Center=�6%   $��5q�6G   $��15(�6R   $��Barcode��6`   $��0��6t   $��3��6�   �� 5<      -   5        $ 
txtBarcdoe��5<   �   $ barcode��6   $��15(�6B   $��35��6P   $��4q�6\   
������ $ 80��6�   $��5q�6�   $	��200��6�   {�.  $��1��5=      $��3��6&   ��5<   �   �� *	Barcode+$ PropertyChanged=�# Z 5=   &   �� 5?      $ sellpricepos��6   $��Center=�6'   $��5q�6I   $��15(�6T   $��
Sell Price��6b   $��0��6x   $��4��6�   2  ,MerchantService.POS.UserControls.BaseTextBox  5A      -   5          Name$ txtSellPrice��5A   �   $ 	sellprice��6   $��15(�6M   $��35��6[   $��4q�6g   
������ $ 80��6�   $��5q�6�   $	��200��6�      IsFloat . $��1��6   $��4��6  ��6�   �� *	SellPrice+ �� Mode$ TwoWay=�6  �� 5D      $ costpricepos��6   $��Center=�6'   $��5q�6I   $��15(�6T   $��
Cost Price��6b   $��0��6x   $��5��6�     5F      -   5        $ txtCostPrice��5F   �   $ 	costprice��6   $��15(�6M   $��35��6[   $��4q�6g   
������ $ 80��6�   $��5q�6�   $	��200��6�    . $��1��6�   $��5��6  ��6�   �� *	CostPrice+$ TwoWay=�6  �� 5H      $ unittypepos��6   $��5q�6&   $��15(�61   $��	Unit Type��6?   $��0��6T   $��6��6d   �� 5J      -   5         ��Name$ 
cbUnitType��5J   �   $ unitype��6   $��15(�6C   $��35��6Q   $��4q�6]   
������ $��5q�6�   $	��200��6�   $��6��6�   $��1��6�    �� DisplayMemberPath$ ValueEn��6�    �� SelectedValuePath$ Id��5K      ��6.   �� *UnitTypeCollection+$ PropertyChanged=�6   �� 5M      $ baseunitcountpos��6   $��Center=�6+   $��5q�6M   $��15(�6X   $��Base Unit Count��6f   $��0��6�   $��7��6�   �� 5N      -	   5        $ txtBaseUnitCount��5N   �   $ 	basecount��6   $��15(�6D   $��35��6R   $��4q�6^   
������ $ 80��6�   $��5q�6�   $	��200��6�   $��1��6  $��7��6#  ��6�   �� *BaseUnitCount+$ TwoWay=�$ PropertyChanged=�61  5O      �� 5P   
    �� Orientation$ 
Horizontal=�6   $��Center=�6.   $��0,20,0,0q�6K   .+�5Q      �� $ 
Horizontal=�6   .+�5R      �� $ 	submitpos��6   $��14(�6(   $��Submit��66   $��60��6G   $��35��6R   
����������	#FF28759F$��Right=�5S   ,   $��Center=�6O   $��Center=�5T      �� 5U      $��14(�6   $
��(F3)��6&   $��50��65   $��35��6@   
����������	#FF28759F$
��Left=�5V   ,   $��Center=�6N   $��Center=�5W      5X      �� 5Y      $ 
Horizontal=�6   .+�5Z      �� $ 	cancelpos��6   $��14(�6(   $��Cancel��66   $��60��6G   $��35��6R   
����������	#FFB44F3D$��Right=�5[   ,   $��Center=�6O   $��Center=�5\      $��10,0,0,0q�63   �� 5]      $��14(�6   $
��(F4)��6&   $��50��65   $��35��6@   
����������	#FFB44F3D$
��Left=�5^   ,   $��Center=�6N   $��Center=�5_      $��0,0,0,0q�63   5`      5a      5b      5c      