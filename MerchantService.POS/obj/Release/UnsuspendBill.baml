   M S B A M L   `   `   `  ���� X  TXceed.Wpf.Toolkit, Version=3.0.0.0, Culture=neutral, PublicKeyToken=3e4669d2f30244f4P:clr-namespace:Xceed.Wpf.Toolkit;assembly=Xceed.Wpf.ToolkitXceed.Wpf.Toolkit   MerchantService.POS'   !MerchantService.POS.UnsuspendBill   R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    Ltoolkit:clr-namespace:Xceed.Wpf.Toolkit;assembly=Xceed.Wpf.Toolkit    R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml       � Title$  Unsuspend Bill��
 � Tag$ unsuspendbill��$	��450��$	��800�� � WindowStartupLocation$ CenterScreen=� � 
ResizeMode$ NoResize=� � WindowStyle$ 
ToolWindow=� J� InputBindings �� 
 �� Key$ F4�� �� Command �� *CancelCommand+.��%   Xceed.Wpf.Toolkit.BusyIndicator     BusyContent$ 
Fetching..��	   IsBusy	 �� *IsBusy+.��� ���	#FFEFF0F2.+��� -   
 ��Name$
 stackPanelMain��$��Stretch=� �� Orientation$ Vertical=�$��15q�$	��400��$	��Top=�.+�&   System.Windows.Controls.DataGrid  -   $	��dg1��   AutoGenerateColumns .     SelectionMode$ Single=�   CanUserAddRows .     CanUserDeleteRows .     SelectionUnit$ FullRow=�|�.    
IsReadOnly . 
������    HeadersVisibility$ Column=�$��Stretch=�$	��Top=�
�������   GridLinesVisibility$ 
Horizontal=�   HorizontalGridLinesBrush
 �����$	��300��$	��765��   	RowHeight$ 35Q�   ColumnHeaderHeight$ 35Q����� *TempTransItemCollection+ �� Mode$ TwoWay=� �� UpdateSourceTrigger$ PropertyChanged=� �� NotifyOnSourceUpdated .    ColumnHeaderStyle ��  �� 
TargetType=  7System.Windows.Controls.Primitives.DataGridColumnHeader"  .���  �� Property � �� �� Value
 �������  � ��$
 Left=���  � �� �	#FF081B22��  � ��$ 10,0,0,0q���  � ��
 ����    RowStyle �� )  #System.Windows.Controls.DataGridRow"  .���  � �� �	#FF081B22��  � ��$ 0,0,0,0q���  � ��$ 13(���  � ��$
 Left=���  � ��$ Center=���  � ��
 ����  �� Triggers P�   P� Property  �@ 
IsSelected! P� Value! . . ���  � ��
 �������  � ��
 ���� P�   �@J�IsMouseOver! . . ���  � �� �	#FFECBD51��  � ��
 ���� " �� 	Resources" # �� Color��%�   (��       * SystemColors.HighlightBrushKey+)(��      *$"SystemColors.HighlightTextBrushKey+)�� $# Transparent���� $# Black��$   Columns$ 0  *System.Windows.Controls.DataGridTextColumn  ,  &System.Windows.Controls.DataGridColumn%   Header$% 	REFERENCE��&   
IsReadOnly& . '   Width5  /System.Windows.Controls.DataGridLengthConverter$' * 1  +System.Windows.Controls.DataGridBoundColumn(   Binding( �� *	Reference+  $% TRANSACTION DATE��& . $' * ( �� *	TransDate+)   RowDetailsTemplate) �� .R�  *  Name$* 	childGrid��+   CanUserResizeColumns+ .  ,   CanUserReorderColumns, .  -   CanUserSortColumns- .   .   .  $��5q���.  $	��765��$��Stretch=�-	  'System.Windows.Input.KeyboardNavigation. 	  DirectionalNavigation$
. None=�|�.   .  $��60�� . $ 25Q�$ 25Q�$ Column=�$	 All=�$ FullRow=� �#DADADA/   VerticalGridLinesBrush/ �#DADADA���� *POSTempItemForChild+ �� "  .���  � ��
 �   ���  � ��$
 Left=���  � �� �	#FFDEDEDC��  � ��$ 10,0,0,0q�$   $' * $% Barcode��( �� *	Barcode+  $' * $
% Item��( �� *
ItemName+  $' * $% Flavor��( �� *
ItemFlavor+  $' * $
% Unit��( �� *
UnitName+  $' * $% Quantity��( �� *
Quantity+�� $ 
Horizontal=�$��0,20,0,0q�$��Center=�$��Center=�.+��� $ 	cancelpos��$��14(�$��Cancel��$��80��$��35��
����������	#FFB44F3D$��Right=�$��Center=�$��Center=��� $��14(�$
��(F4)��$��50��$��35��
����������	#FFB44F3D$
��Left=�$��Center=�$��Center=�