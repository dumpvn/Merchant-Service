/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var apiPaths = {
    saveGroupAccount: 'api/GroupAccount/saveGroup',
    getBranchList: 'api/branch/getBranch',
    getListOfBranch: 'api/item/getbranchlist',
    getGroupList: 'api/GroupAccount/getGroupList',
    updateGroupAccount: 'api/GroupAccount/UpdateGroup',
    getLedgerList: 'api/LedgerAccount/GetLedgerList',
    saveLedgerAccount: 'api/LedgerAccount/SaveLedger',
    updateLedgerAccount: 'api/LedgerAccount/UpdateLedger',
    saveSupplierProfile: 'api/supplierprofile/savesupplier',
    checkSPOExist: 'api/supplierprofile/checkspoexist',
    getSupplierProfileList: 'api/supplierprofile/getsupplierprofilelist',
    deleteSupplier: 'api/supplierprofile/deletesupplierprofile',
    updateSupplier: 'api/supplierprofile/updatesupplierprofile',
    getDaysLimitList: 'api/supplierprofile/getsupplierdayslimitbyid',
    getSupplierTypeList: 'api/supplierprofile/getsuppliertypelist',
    saveSPOBillItem: 'api/sporeceiving/savespobill',
    addSPOBill: 'api/sporeceiving/addBill',
    deleteSPOBill: 'api/sporeceiving/deletespobill',
    receiveSPOItem: 'api/sporeceiving/receivespoitem',
    getIncidentReportDetial: 'api/incidentreport/getincidentreportdetail',
    getContactPersonList: 'api/supplierprofile/getcontactpersonlist',
    saveContactPerson: 'api/supplierprofile/savecontactperson',
    deleteContactPerson: 'api/supplierprofile/deletecontactperson',
    updateContactPerson: 'api/supplierprofile/updatecontactperson',
    getConstantList: 'api/SystemParameter/GetConstantList',
    getReceiptPaymentAccount: 'api/LedgerAccount/GetReceiptPaymentAccount',
    CheckLedgerAccount: 'api/LedgerAccount/CheckSelectedLedgerIsBankAccount',
    getLedgerAccountForReceiptPayment: "api/LedgerAccount/GetLedgerAccountWithoutCashAndBank",
    saveReceipt: 'api/ReceiptPaymentVoucher/SaveReceiptVoucher',
    saveSupplierPayment: 'api/spopayment/savesupplierpayment',
    getSupplierBillList: 'api/spopayment/getsupplierbill',
    getCreditNote: 'api/spopayment/getcreditnote',
    checkCondition: 'api/spopayment/checkcondition',
    checkSPO: 'api/spopayment/checksupplierpo',
    saveParameterName: 'api/SystemParameter/SaveParameterName',
    editSystemParameterData: 'api/SystemParameter/EditSystemParameterData',
    deleteSystemParameter: 'api/SystemParameter/DeleteSystemParameter',
    getSystemParamterListById: 'api/SystemParameter/GetParameterListById',
    getParamTypeByParamId: 'api/SystemParameter/GetParamTypeByParamId',
    userAccessPageList: 'api/UserDetail/userAccessPageList',
    CountReceiptVoucherRecord: 'api/ReceiptPaymentVoucher/CountReceiptVoucherRecord',
    saveCategory: 'api/category/savecategory',
    getCategoryList: 'api/category/getcategorylist',
    userAccessActivePageList: 'api/UserAccess/getUserAccessActivePageByRoleId',
    checkCurrentUserAccess: 'api/UserAccess/checkCurrentUserAllowToAccessPage',
    saveItemSupplier: 'api/category/saveitemsupplier',
    deleteCategory: 'api/category/deletecategory',
    deleteItemSupplier: 'api/category/deleteitemsupplier',
    canDeleteItemSupplier: 'api/category/candeleteitemsupplier',
    saveSystemParameterName: 'api/SystemParameter/SaveSystemParameterName',
    editSysParameterData: 'api/SystemParameter/EditSysParameterData',
    deleteSysParameter: 'api/SystemParameter/DeleteSysParameter',
    getSysParamterListById: 'api/SystemParameter/GetSystemParameterListById',
    getRoleList: 'api/Role/GetRoleList',
    getUnitTypeList: 'api/item/getunittypelist',
    getUserBranch: 'api/supplierpo/getbranchlist',
    getSupplierItem: 'api/supplierpo/getitemlist',
    saveSuppliersPO: 'api/supplierpo/savesupplierpo',
    sendSPO: 'api/supplierpoworklist/sendsupplierpo',
    getListOfItemProfile: 'api/item/getitemprofilelist',
    getItemProfileObjectById: 'api/item/getitemprofileobjectbyid',
    updateItemProfile: 'api/item/updateitemprofile',
    deleteItemProfile: 'api/item/deleteitemprofile',
    getParentItemDetialById: 'api/Item/getParentItemDetialById',
    viewCustomerDetailsById: 'api/customer/viewcustomerdetailsbyid',
    addNewCustomerDetails: 'api/customer/addnewcustomerdetails',
    getAllCustomerList: 'api/customer/getallcustomer',
    getCustomerList: 'api/customer/getcustomer',
    getItemProfile: 'api/item/getitemprofilelist',
    insertSubItem: 'api/item/insertsubitem',
    getMarginProfit: 'api/item/getmarginprofit',
    insertNewItemProfile: 'api/item/insertnewitemprofile',
    getSalesLeadger: 'api/LedgerAccount/GetSalesLedgerAccount',
    getItemProfileList: 'api/item/getlistofitemprofile',
    getSubItemListByParentId: 'api/item/getsubitemlistbyparentid',
    updateSubItem: 'api/item/updatesubitem',
    convertToMainItem: 'api/item/converttomainitem',
    getItemQuantityList: 'api/itemchangerequest/getitemquantitylist',
    saveICR: 'api/itemchangerequest/saveicr',
    getICRWorkList: 'api/icrworklist/geticrworklist',
    getICRDetail: 'api/icrworklist/geticrdetail',
    getCompanyConfiguration: 'api/itemchangerequest/getcompanyconfigruation',
    updateICR: 'api/itemchangerequest/updateicr',
    approveICR: 'api/icrworklist/approvalicr',
    reviewICR: 'api/icrworklist/reviewicr',
    rejectICR: 'api/icrworklist/rejecticrdetail',
    resubmitICR: 'api/icrworklist/resubmiticrdetail',
    saveSupplierReturnRequest: 'api/supplierreturnrequest/savesupplierreturnrequest',
    updateSupplierReturnRequest: 'api/supplierreturnrequest/updatesupplierreturnrequest',
    fetchItemList: 'api/supplierreturnrequest/getitemlist',
    getSupplierReturnWorkList: 'api/supreturnworklistrequest/getsupreturnworklist',
    getSupReturnRequest: 'api/supreturnworklistrequest/getsupreturnrequest',
    rejectSupReturnRequest: 'api/supreturnworklistrequest/rejectsupreturnrequest',
    deleteSupReturnRequest: 'api/supreturnworklistrequest/deletesupreturnrequest',
    approveSupReturnRequest: 'api/supreturnworklistrequest/approvesupplierreturn',
    printReturnReceipt: 'api/supreturnworklistrequest/printsupplierreturn',
    resubmitSupReturnRequest: 'api/supreturnworklistrequest/resubmitsupreturnrequest',
    getSupplierPOWorkList: 'api/supplierpoworklist/getsupplierpoworklist',
    getSupplierPO: 'api/supplierpo/getspo',
    getCurrentUser: 'api/supplierpoworklist/getcurrentuserdetail',
    getSPO: 'api/supplierpoworklist/getsupplierpo',
    updateSPO: 'api/supplierpo/updatespo',
    resubmitSPO: 'api/supplierpo/resubmitpo',
    approveSPO: 'api/supplierpoworklist/approvesupplierpo',
    reviewSPO: 'api/supplierpoworklist/reviewspo',
    rejectSPO: 'api/supplierpoworklist/rejectsupplierpo',
    deleteSPO: 'api/supplierpo/deletespo',
    submitSPO: 'api/supplierpo/submitspo',
    getSpoReceiving: 'api/sporeceiving/getsupplierporeceiving',
    endReceiving: 'api/sporeceiving/endreceiving',
    getSPOBill: 'api/sporeceiving/getsupplierpobill',
    verifyBill: 'api/sporeceiving/verifybill',
    verifySPO: 'api/sporeceiving/verifyspo',
    cancelSPO: 'api/supplierpoworklist/cancelsupplierpo',
    approveCancelSPO: 'api/supplierpoworklist/approvecancelsupplierpo',
    countSalesVoucher: 'api/SalesPurchaseVoucher/CountSalesOrPurchaseVoucherRecord',
    saveSalesPuchaseVoucher: 'api/SalesPurchaseVoucher/SaveSalesPurchaseVocuher',
    getPurchaseLedger: "api/LedgerAccount/GetPurchaseLedgerAccount",
    changeMainItem: 'api/item/changemainitem',
    insertItemOffer: 'api/item/insertitemoffer',
    getItemList: 'api/item/getitemlist',
    fetchItemProfileList: 'api/item/fetchitemprofilelist',
    getAdditionalServiceList: 'api/additionalServices/getAdditionalServicesList',
    saveCPO: 'api/customerpo/savecustomerpo',
    cancelCPO: 'api/customerpo/cancelcustomerpo',
    getConfigurables: 'api/customerpo/getconfigurables',
    getCustomerPurchaseOrderByCPOId: 'api/customerpo/getcustomerpurchaseorderbycpoid',
    generateCPONumber: 'api/customerpo/generatecustomerponumber',
    getCustomerPOListByCustomerId: 'api/customerpo/getcustomerpolistbycustomerid',
    getUserBranchName: 'api/supplierpo/getuserbranch',
    getCustomerById: 'api/customer/getcustomerbyid',
    getSearchList: 'api/item/getstatuslist',
    getItemOfferWorkList: 'api/item/getitemofferworklist',
    getItemOfferDetailById: 'api/item/getitemofferdetailbyid',
    approveItemOffer: 'api/item/approveitemoffer',
    rejectItemOffer: 'api/item/rejectitemoffer',
    reSubmitCustomerInformation: 'api/customer/resubmitcustomerinformation',
    deleteCustomerDetail: 'api/customer/deletecustomerdetail',
    updateCustomerInformation: 'api/customer/updatecustomerinformation',
    getactionList: 'api/item/getactionlist',
    updateItemOffer: 'api/item/updateitemoffer',
    customerRequestApproval: 'api/customer/customerrequestapproval',
    getCustomerPOWorkList: 'api/customerpoworklist/getcustomerpoworklist',
    getCustomerPO: 'api/customerpoworklist/getcustomerpo',
    stopItemOffer: 'api/item/stopitemoffer',
    resumeItemOffer: 'api/item/resumeitemoffer',
    getIncientReportList: 'api/incidentreport/getlistofincidentreportworklist',
    insertIntoPOSSession: 'api/POSProcess/insertPOSSession',
    getItemProfileDetailById: "api/item/getitemprofiledetailbyid",
    getMembershipCode: 'api/customer/getmembershipcode',
    checkNumberAlreadyExistOrNot: 'api/customer/checknumberalreadyexistornot',
    reviewItemOfferDetail: "api/POSSession/reviewItemOffer",
    getStatusList: "api/POSSession/getStatusList",
    deletedItemOffer: "api/item/deleteditemoffer",
    getAllIncidentReportWorkList: "api/incidentreport/getallincidentreportworklist",
    getIncidentReportDetailsById: "api/incidentreport/getincidentreportdetailsbyid",
    getItemListFotItemOffer: "api/item/getitemlistfotitemoffer",
    editInformationByItemId: "api/incidentreport/editinformationbyitemid",
    updateItemDetails: "api/incidentreport/updateitemdetails",
    submitIncidentReport: "api/incidentreport/submitincidentreport",
    reviewIncidentReportDetails: "api/incidentreport/reviewincidentreportdetails",
    incidentReportApproveAndReject: "api/incidentreport/incidentreportapproveandreject",
    approveButton: "api/incidentreport/approvebutton",
    resetIncident: "api/incidentreport/resetincident",
    getCreditNoteList: "api/creditnote/getcreditnotelist",
    saveBalanceAmount: "api/customer/savebalanceamount",
    getCustomerPODetail: "api/customerpoworklist/getcustomerpodetail",
    getSupplierListByItemId: "api/item/getsupplierlistbyitemid",
    getSupplierListByCategoryId: "api/item/getsupplierlistbycategoryid",
    submitReceivigCreditNoteDetail: "api/creditnote/submitreceivigcreditnote",
    getLedegerWithChild: "api/LedgerAccount/getLedegerWithChild",
    getGroupTypeList: "api/LedgerAccount/getGroupTypeList",
    saveAccountingJournalEntry: "api/Accounting/saveAccountingJournalEntry",
    receivingPurchaseOrder: "api/sporeceiving/getreceivingpurchasorderlist",
    getAllAccountingEntry: "api/Accounting/getAllAccountingEntry",
    getAllInitiatorOfSpo: "api/item/getallinitiatorofspo",
    //POS Session
    getCashierDetail: 'api/possession/getcashierdetailbyid',
    getAllTransaction: 'api/possession/getalltransactiontype',
    addNonSalesTransaction: 'api/possession/addnonsalestransaction',
    getNonSalesTransactionList: 'api/possession/getnonsalestransaction',
    getPOSSessionBillListByCashierId: 'api/possession/getpossessionbilllistbycashierid',
    getPOSSessionBillList: 'api/possession/getpossessionbilllist',
    savePOSSessionClose: 'api/possession/savepossessionclose',
    submitPOSSessionClose: 'api/possession/submitpossessionclose',
    viewSessionBillPayment: 'api/possession/viewsessionbillpaymentbyid',
    changePaymentTypeEvent: 'api/possession/changepaymenttypeevent',
    nonSalesTransactionForDelete: 'api/possession/deletednonsalestransaction',
    getPOSSessionWorkList: 'api/possession/getpossessionwork',
    getCashierList: 'api/possession/getpossessioncashier',
    getCashierByBranch: 'api/possession/getcashierbybranch',
    sessionClosingVarificationWorkFlow: 'api/possession/sessionclosingvarificationworkflow',
    sessionClosingUpdate: 'api/possession/sessionclosingupdate',
    getPOSSeesionActionList: "api/possession/getpossessionactionlist",
    varificationForPOSSession: "api/possession/varificationforpossession",
    approveForPOSSession: "api/possession/approveforpossession",
    rejectForPOSSession: "api/possession/rejectforpossession",
    //Return Bill
    returnBillDetailById: 'api/returnbill/getreturnbilldetailbyid',
    billDetailByBillNumberByBranch: 'api/returnbill/billdetailbybillnumberbybranch',
    getReturnBillDetail: "api/returnbill/getreturnbilldetail",
    deleteReturnBill: "api/returnbill/deletereturnbill",
    getPOSBillList: 'api/returnbill/getposbilllist',
    posBillListByBranchId: 'api/returnbill/posbilllistbybranchid',
    submitPOSBill: 'api/returnbill/submitposbill',
    getReturnBillList: "api/returnbill/getreturnbilllistbybillnumber",
    getReturnBillReceipt: "api/returnbill/getreturnbillreceipt",
    checkAllowToAnotherBranch: "api/returnbill/checkallowtoanotherbranch",
    //Item Destruction
    getSupplierItemList: 'api/itemdestruction/getsupplieritemlist',
    checkItemAlreadyDestruct: "api/itemdestruction/checkitemalreadydestruct",
    getSupplierItemListByBranchId: 'api/itemdestruction/getsupplieritemlistbybranchid',
    submitDestructionItem: 'api/itemdestruction/submitdestructionitemrequest',
    getItemDestruction: 'api/itemdestruction/getitemdestructionrequest',
    getItemDestructionDetailByDesturctionId: 'api/itemdestruction/getitemdestructiondetailbydesturctionid',
    getActionListForItemDestruction: 'api/itemdestruction/getactionlist',
    approveItemDestructionRequest: 'api/itemdestruction/approveitemdestructionrequest',
    rejectItemDestructionRequest: "api/itemdestruction/rejectitemdestructionrequest",
    returnItemDestructionRequest: 'api/itemdestruction/returnitemdestructionrequest',
    itemDestructionRequestById: 'api/itemdestruction/itemdestructionrequestbyid',
    updateDestructionItem: 'api/itemdestruction/updatedestructionitem',
    reSubmitItemDestruction: "api/itemdestruction/resubmititemdestruction",
    //internal transfer goods
    getAllBranchList: "api/internaltransfergoods/branch",
    getAllRequestType: "api/internaltransfergoods/getallrequesttype",
    getItemListById: "api/internaltransfergoods/getitemlistbyid",
    itemDetailsByItemBarcode: "api/internaltransfergoods/getitemdetailsbyitembarcode",
    submitInventoryTranserRequest: "api/internaltransfergoods/submitinventorytranserrequest",
    getAllInventoryTransferList: "api/internaltransfergoods/getallinventorytransferlist",
    viewInternalTransferGoodDetailsById: "api/internaltransfergoods/viewinternaltransfergooddetailsbyid",
    reviewTransferInventoryById: "api/internaltransfergoods/reviewtransferinventorybyid",
    reSubmitTransferInventory: "api/internaltransfergoods/resubmittransferinventory",
    transferInventoryApprovalById: "api/internaltransfergoods/transferinventoryapprovalbyid",
    receiveTransferInventoryById: "api/internaltransfergoods/receivetransferinventorybyid",
    printTransferGoodReceipt: "api/internaltransfergoods/printtransfergoodreceipt",
    //inventory
    getAllInvetoryType: "api/inventory/getallinvetorytype",
    getAllCateGoryList: "api/inventory/getallcategorylist",
    getAllSupplierList: "api/inventory/getallsupplierlist",
    submitIssueStockInventory: 'api/inventory/submitissuestockinventory',
    submitStockInventory: "api/inventory/submitstockinventory",
    submitConflictBranchIssueInventory: "api/inventory/submitconflictbranchissueinventory",
    getAllInventoryList: 'api/inventory/getallinventorylist',
    getAllInventoryRecorderList: 'api/inventory/getallinventoryrecorderlist',
    deleteIssueStockInventoryById: 'api/inventory/deleteissuestockinventorybyid',
    viewIssueStockInventoryMoniterDetailsById: 'api/inventory/viewissuestockinventorymoniterdetailsbyid',
    startIssueStockInventory: 'api/inventory/startissuestockinventory',
    getInventoryRecorderDetailsById: 'api/inventory/getinventoryrecorderdetailsbyid',
    getItemListByIssueInventoryId: 'api/inventory/getitemlistbyissueinventoryid',
    getItemDetailsByItemBarcode: 'api/inventory/getitemdetailsbyitembarcode',
    addIssueInventoryRecordDetails: 'api/inventory/addissueinventoryrecorddetails',
    submitIssueStockInventoryDetails: 'api/inventory/submitissuestockinventorydetails',
    viewIssueStockInventoryDetailsById: 'api/inventory/viewissuestockinventorydetailsbyid',
    issueStockInventoryApprovalById: 'api/inventory/issuestockinventoryapprovalbyid',
    reviewIssueStockInventoryById: 'api/inventory/reviewissuestockinventorybyid',
    getItemDetailsById: 'api/inventory/getitemdetailsbyid',
    reSubmitIssueStockInventory: 'api/inventory/resubmitissuestockinventory',
    updateIssueInventoryDate: "api/inventory/updateissueinventorydate",
    updateIssueStockInventoryDate: "api/inventory/updateissuestockinventorydate",
    getUnmatchedItemListById: "api/inventory/getunmatcheditemlistbyid",
    reRecordSelectedItemDetails: "api/inventory/rerecordselecteditemdetails",
    genrateCompanyBarcode: "api/item/genrateCompanyBarcode"
};
var app = angular.module('app', [
    // Angular modules 
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngToast',
    'ngMessages',
    'ui.select',
    'timepickerPop',
    'ui.mask',
    'angularjs-dropdown-multiselect',
    'dirPagination',
    'googlechart',
    'SignalR'
]);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: '/Templates/Dashboard.html'
        }).when('/AccountGroup', {
            templateUrl: '/Templates/Account/AccountGroup.html'
        }).when('/AccountLedger', {
            templateUrl: '/Templates/Account/Ledger.html'
        }).when('/Journal', {
            templateUrl: '/Templates/Account/Journal.html'
        }).when('/SupplierProfile', {
            templateUrl: '/Templates/Supplier/SupplierProfile.html'
        }).when('/Receipt', {
            templateUrl: '/Templates/Account/Receipt.html'
        }).when('/Payment', {
            templateUrl: '/Templates/Account/Payment.html'
        }).when('/Sales', {
            templateUrl: '/Templates/Account/Sales.html'
        }).when('/Purchase', {
            templateUrl: '/Templates/Account/Purchase.html'
        }).when('/UploadBankStatement', {
            templateUrl: '/Templates/Account/UploadBankStatement.html'
        }).when('/BankReconcile', {
            templateUrl: '/Templates/Account/BankReconcile.html'
        }).when('/AccountingSummary', {
            templateUrl: '/Templates/Account/AccountingSummary.html'
        }).when('/ManageSystemParameter', {
            templateUrl: '/Templates/Item/ManageSystemParameter.html'
        }).when('/ItemProfile', {
            templateUrl: '/Templates/Item/ItemProfile.html'
        }).when('/InitiateICR', {
            templateUrl: '/Templates/Item/InitiateICR.html'
        }).when('/InitiateICR/:id', {
            templateUrl: '/Templates/Item/InitiateICR.html'
        }).when('/ICRWorkList', {
            templateUrl: '/Templates/Item/ICRWorkList.html'
        }).when('/ICRDetails/:id', {
            templateUrl: '/Templates/Item/ICRDetails.html'
        }).when('/ItemOffer', {
            templateUrl: '/Templates/Item/ItemOffer.html'
        }).when('/ItemOfferWorkList', {
            templateUrl: '/Templates/Item/ItemOfferWorklist.html'
        }).when('/ManageCategory', {
            templateUrl: '/Templates/Item/ManageCategory.html'
        }).when('/BrandSearch', {
            templateUrl: '/Templates/Item/BrandSearch.html'
        }).when('/CustomerWorkList', {
            templateUrl: '/Templates/Customer/CustomerProfile.html'
        }).when('/CustomerPO', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrder.html'
        }).when('/CustomerPO/:id', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrder.html'
        }).when('/CustomerPOWorkList', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrderWorklist.html'
        }).when('/CustomerPODetail', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrderDetails.html'
        }).when('/CustomerPODetail/:id', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrderDetails.html'
        }).when('/CustomerPOPayment', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrderPayment.html'
        }).when('/CustomerPOPayment/:id', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrderPayment.html'
        }).when('/CustomerPurchaseOrderReceipt', {
            templateUrl: '/Templates/Customer/CustomerPurchaseOrderReceipt.html'
        }).when('/SupplierPO', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrder.html'
        }).when('/SupplierPO/:id', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrder.html'
        }).when('/SupplierPODetails/:id', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrderDetails.html'
        }).when('/SupplierPOWorkList', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrderWorklist.html'
        }).when('/SupplierPOReceiving', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrderReceiving.html'
        }).when('/SupplierPOReceiving/:id', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrderReceiving.html'
        }).when('/SupplierPurchaseOrderBillPayment', {
            templateUrl: '/Templates/Supplier/SupplierPurchaseOrderBillPayment.html'
        }).when('/SupplierReturnRequest/:id', {
            templateUrl: '/Templates/Supplier/SupplierReturnRequest.html'
        }).when('/SupplierReturnRequest', {
            templateUrl: '/Templates/Supplier/SupplierReturnRequest.html'
        }).when('/SupplierReturnRequestWorkList', {
            templateUrl: '/Templates/Supplier/SupplierReturnRequestWorklist.html'
        }).when('/SupplierReturnRequestDetails/:id', {
            templateUrl: '/Templates/Supplier/SupplierReturnRequestDetails.html'
        }).when('/SupplierReturnReceipt', {
            templateUrl: '/Templates/Supplier/SupplierReturnReceipt.html'
        }).when('/CreditNote', {
            templateUrl: '/Templates/Supplier/CreditNote.html'
        }).when('/InventoryTransferWorkList', {
            templateUrl: '/Templates/InternalTransferGoods/InventoryTransferGoodslist.html'
        }).when('/InventoryTransfer', {
            templateUrl: '/Templates/InternalTransferGoods/InventoryTransfer.html'
        }).when('/StockInventory', {
            templateUrl: '/Templates/Inventory/StockInventory.html'
        }).when('/InventoryInvestigation/:id', {
            templateUrl: '/Templates/Inventory/InventoryInvestigation.html'
        }).when('/InventoryMonitor/:id', {
            templateUrl: '/Templates/Inventory/InventoryMonitor.html'
        }).when('/ItemDestructionDetails/:id', {
            templateUrl: '/Templates/Inventory/ItemDestructionDetails.html'
        }).when('/ItemDestructionWorkList', {
            templateUrl: '/Templates/Inventory/ItemDestructionWorklist.html'
        }).when('/SessionClosing', {
            templateUrl: '/Templates/Sales/SessionClosing.html'
        }).when('/SessionWorkList', {
            templateUrl: '/Templates/Sales/SessionWorklist.html'
        }).when('/SessionBills', {
            templateUrl: '/Templates/Sales/SessionBills.html'
        }).when('/SessionBills/:id', {
            templateUrl: '/Templates/Sales/SessionBills.html'
        }).when('/SessionClosingVarification/:id', {
            templateUrl: '/Templates/Sales/SessionClosingVarification.html'
        }).when('/ReturnBill', {
            templateUrl: '/Templates/Sales/ReturnBill.html'
        }).when('/AuthenticationError', {
            templateUrl: '/Templates/AuthenticationError.html'
        }).when('/AddNewItem', {
            templateUrl: '/Templates/Item/AddNewItem.html'
        }).when('/AddNewCustomer', {
            templateUrl: '/Templates/Customer/AddCustomer.html'
        }).when('/EditNewItem/:id', {
            templateUrl: '/Templates/Item/AddNewItem.html'
        }).when('/AddSubItem/:parentsId', {
            templateUrl: '/Templates/Item/AddSubItem.html'
        }).when('/EditSubItem/:id', {
            templateUrl: '/Templates/Item/AddSubItem.html'
        }).when('/ItemOfferDetails/:id', {
            templateUrl: '/Templates/Item/ItemOfferDetails.html'
        }).when('/ManageIncidentReportWorklist/', {
            templateUrl: '/Templates/IncidentReport/ManageIncidentReportWorklist.html'
        }).when('/ManageIncidentReportApproval/:id', {
            templateUrl: '/Templates/IncidentReport/ManageIncidentReportApproval.html'
        }).when('/IncidentReport/', {
            templateUrl: '/Templates/IncidentReport/ItemIncidentReportWorkList.html'
        }).when('/CustomerDetails/:id', {
            templateUrl: '/Templates/Customer/CustomerDetails.html'
        }).when('/SessionClosing/:id', {
            templateUrl: '/Templates/Sales/SessionClosing.html'
        }).when('/IncidentReportDetail/:id', {
            templateUrl: '/Templates/IncidentReport/ItemIncidentReport.html'
        }).when('/BillSearch/', {
            templateUrl: '/Templates/Sales/BillSearch.html'
        }).when('/EditItemDetail/:id', {
            templateUrl: '/Templates/IncidentReport/EditItemDetail.html'
        }).when('/ReturnBillReceipt/:id', {
            templateUrl: '/Templates/Sales/ReturnBillReceipt.html'
        }).when('/IssueStockInventory', {
            templateUrl: '/Templates/Inventory/IssueStockInventory.html'
        }).when('/InventoryMonitorWorkList', {
            templateUrl: '/Templates/Inventory/InventoryMonitorWorkList.html'
        }).when('/InventoryRecorderWorkList', {
            templateUrl: '/Templates/Inventory/InventoryRecorderWorkList.html'
        }).when('/InventoryMonitorDetails/:id', {
            templateUrl: '/Templates/Inventory/InventoryMonitor.html'
        }).when('/InventoryRecorder/:id', {
            templateUrl: '/Templates/Inventory/InventoryRecorder.html'
        }).when('/ItemDestructionRequest/:id', {
            templateUrl: '/Templates/Inventory/ItemDestructionRequest.html'
        }).when('/ItemDestructionRequest', {
            templateUrl: '/Templates/Inventory/ItemDestructionRequest.html'
        }).when('/ReturnBillSearch', {
            templateUrl: '/Templates/Sales/ReturnBillSearch.html'
        }).when('/ItemDestructionReceipt', {
            templateUrl: '/Templates/Inventory/ItemDestructionReceipt.html'
        }).when('/CustomerPODetailList', {
            templateUrl: '/Templates/Customer/CustomerPODetailList.html'
        }).when('/InventoryTransferDetails/:id', {
            templateUrl: '/Templates/InternalTransferGoods/InventoryTransferDetails.html'
        }).when('/AccountingWorkList', {
            templateUrl: '/Templates/Account/AccountingWorkList.html'
        });
    }]);
//# sourceMappingURL=app.js.map