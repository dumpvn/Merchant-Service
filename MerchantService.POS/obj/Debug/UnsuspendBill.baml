   M S B A M L   `   `   `  ����X  TXceed.Wpf.Toolkit, Version=3.0.0.0, Culture=neutral, PublicKeyToken=3e4669d2f30244f4P:clr-namespace:Xceed.Wpf.Toolkit;assembly=Xceed.Wpf.ToolkitXceed.Wpf.Toolkit  5   	    MerchantService.POS'   !MerchantService.POS.UnsuspendBill   5   	   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5   	   Ltoolkit:clr-namespace:Xceed.Wpf.Toolkit;assembly=Xceed.Wpf.Toolkit    5   	   R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Unsuspend Bill��5   	   
 � Tag$ unsuspendbillpos��6    $	��450��67   $	��800��6D    � WindowStartupLocation$ CenterScreen=�6P    � 
ResizeMode$ NoResize=�6u    � WindowStyle$ 
ToolWindow=�6�    J� InputBindings 5      �� 5   
   
 �� Key$ F4��6    �� Command 6   �� *CancelCommand+6B   .��5	      %   Xceed.Wpf.Toolkit.BusyIndicator     BusyContent$ 
Fetching..��66   	   IsBusy	 6   �� *IsBusy+.��5
   
   � -   5        $��grdUnsuspendBill��5
   &   ���	#FFEFF0F2.+�5   
   �� -   5        
 ��Name$
 stackPanelMain��5      $��Stretch=�6-    �� Orientation$ Vertical=�6K   $��15q�6b   $	��400��6n   $	��Top=�6{   .+�5      &   System.Windows.Controls.DataGrid  -   5        $	��dg1��5         AutoGenerateColumns .     SelectionMode$ Single=�6B      CanUserAddRows .     CanUserDeleteRows .     SelectionUnit$ FullRow=�5      |�.    
IsReadOnly . 
������    HeadersVisibility$ Column=�6�   $��Stretch=�5      $	��Top=�65   
�������   GridLinesVisibility$ 
Horizontal=�6`      HorizontalGridLinesBrush
 �����$	��300��5      $	��765��6$      	RowHeight$ 35Q�60      ColumnHeaderHeight$ 35Q�6@   ��5      �� *TempTransItemCollection+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=� �� NotifyOnSourceUpdated .    ColumnHeaderStyle 5      �� 5       �� 
TargetType=  7System.Windows.Controls.Primitives.DataGridColumnHeader"  6    .�5      ��  �� Property � �� �� Value
 �����6K   �� 5       � ��$
 Left=�6K   6Z   �� 5       � �� �	#FF081B226O   �� 5       � ��$ 10,0,0,0q�68   �� 5       � ��
 ���� 6<   5         RowStyle 5      �� 5      )  #System.Windows.Controls.DataGridRow"  6    .�5      ��  � �� �	#FF081B226;   �� 5       � ��$ 0,0,0,0q�67   �� 5       � ��$ 13(�69   �� 5       � ��$
 Left=�6D   �� 5        � ��$ Center=�6B   �� 5!       � ��
 ���� 6<    �� Triggers 5"      P� 5#   "     P� Property  �@ 
IsSelected! P� Value! . . �5$   &   ��  � ��
 �����6C   �� 5%   &    � ��
 ���� 6D   5&   #   P� 5'   "     �@J�IsMouseOver! . . �5(   &   ��  � �� �	#FFECBD516C   �� 5)   &    � ��
 ���� 6D   5*   #   " �� 	Resources" 5,      # �� Color��%�   (��       5-   2   * SystemColors.HighlightBrushKey+)(�� %     5.   2   *$"SystemColors.HighlightTextBrushKey+)�� 5-   "   $# Transparent��6d   �� 5.   "   $# Black��6h   5/      50      $   Columns$ 53      0  *System.Windows.Controls.DataGridTextColumn  54      ,  &System.Windows.Controls.DataGridColumn%   HeaderStringFormat$% referencepos��6-   &   Header$& 	REFERENCE��6O   '   
IsReadOnly' . (   Width5  /System.Windows.Controls.DataGridLengthConverter$( * 6t   1  +System.Windows.Controls.DataGridBoundColumn)   Binding) 6~   �� *	Reference+  55      $% transactiondatepos��6-   $& TRANSACTION DATE��6U   ' . $( * 6�   ) 6�   �� *	TransDate+*   RowDetailsTemplate* 58      �� 59      .R�5:        +  Name$+ 	childGrid��5;   e   ,   CanUserResizeColumns, .  -   CanUserReorderColumns- .  .   CanUserSortColumns. .   .   .  $��5q�5:   �   ��.  $	��765��6�   $��Stretch=�6�   -	  'System.Windows.Input.KeyboardNavigation/ 	  DirectionalNavigation$
/ None=�5;   #   |�.   .  $��60��6�    . $ 25Q�5<   5   $ 25Q�6M   $ Column=�6\   $	 All=�6x   $ FullRow=�6�    �#DADADA0   VerticalGridLinesBrush0 �#DADADA��5=   #   �� *POSTempItemForChild+ 5>   "   �� 5?   &   "  6,   .�5@   *   ��  � ��
 �   �6W   �� 5A   *    � ��$
 Left=�6W   6f   �� 5B   *    � �� �	#FFDEDEDC6[   �� 5C   *    � ��$ 10,0,0,0q�6D   5D   '   $ 5]   "     5^   &   $( * 6U   $% 
barcodepos��6_   $& Barcode��6   ) 69   �� *	Barcode+6�     5_   &   $( * 6V   $% itempos��6`   $
& Item��6}   ) 69   �� *
ItemName+6�     5`   &   $( * 6X   $% 
flavourpos��6b   $& Flavor��6�   ) 69   �� *
ItemFlavor+6�     5a   &   $( * 6V   $% unitpos��6`   $
& Unit��6}   ) 69   �� *
UnitName+6�     5b   &   $( * 6V   $% quantitypos��6`   $& Quantity��6�   ) 69   �� *
Quantity+6�   5d      5f      5i      �� 5j      $ 
Horizontal=�6   $��0,20,0,0q�66   $��Center=�6H   $��Center=�6e   .+�5k      �� $ 	cancelpos��6   $��14(�6(   $��Cancel��66   $��80��6G   $��35��6R   
����������	#FFB44F3D$��Right=�5l   ,   $��Center=�6O   $��Center=�5m      �� 5n      $��14(�6   $
��(F4)��6&   $��50��65   $��35��6@   
����������	#FFB44F3D$
��Left=�5o   ,   $��Center=�6N   $��Center=�5p      5q      5r      5s      5t      5u      