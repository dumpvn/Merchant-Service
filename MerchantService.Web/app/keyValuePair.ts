﻿let stringConstants = {
    errorMessage: "No data found",
    parameterNameEnExist: "Name already exist",
    valueRequired: "Name Required",
    addedSuccessfully: "Name Added Successfully",
    updatedSuccessfully: "Name Updated Successfully",
    invalidValue: "Only alphabets and numbers are allowed",
    groupAdded: "Group Added Successfully",
    groupUpdated: "Group Updated Successfully",
    ledgerUpdated: "Ledger Updated Successfully",
    ledgerInserted: "Ledger Added Successfully",
    accountRequired: "Account is required",

    nameRequired: "Please Enter Name",
    supplierCodeRequired: "Please Enter Supplier Code",
    supplierCodeUnique: "Supplier Code already exists in the system",
    addressRequired: "Please Enter Address",
    phoneMinLength: "Please Enter Minimum 10 digits",
    phoneInvalid: "Please Enter Valid Phone number",
    phoneRequired: "Please Enter Phone Number",
    phoneUnique: "Phone Number already exists in the system",
    FaxInvalid: "Please Enter Valid Fax Number",
    zipcodeMinlength: "Please Enter Minimum 4 digits",
    emailRequired: "Please Enter Email",
    emailInvalid: "Please Enter Valid Email",
    emailUnique: "Email Id already exists in the system",
    supplierTypeRequired: "Please Select Supplier Type",
    groupNameRequired: "Group Name is required",
    categoryUnique: "Category already created",

    groupRequired: "Please Select Group",
    brandRequired: "Please Select Brand",
    supplierRequired: "Please Select Supplier",
    supplierNameRequired: "Please Select Supplier Name",
    supplierUnique: "Supplier has already been added",
    srrNotFound: "No Supplier Return Request Found",
    ledgerNameRequired: "Leder Name is required",
    ledgerAccountRequired: "Ledger Account is required",
    amountRequired: "Amount is required",

    parameterValueExist: "Please Enter Unique Name",
    amountZero: "Please enter Amount or remove Ledger Account",
    customerNameRequired: "Customer name is required",
    mobileNumberRequired: "Mobile number is required ",
    mobileNumberInvalid: "Please enter valid mobile number",
    mobileNumberMinLength: "Please enter minimum 10 digits",
    zipCodeInvalid: "Please enter a valid zipcode number",
    faxInvalid: "Please enter valid fax number",
    phonesInvalid: "Please enter valid phone number",
    emailIdInvalid: "Please enter valid email address",
    amountLimitInvalid: "Please enter valid amount limit",
    balanceAmountInvalid: "Please enter valid balance amount limit",
    partyAccountRequired: "Please Select Party's A/C",
    salesLedgerRequired: "Please Select Sales Ledger",

    itemNameEnRequired: "Please Enter Item Name En",
    itemFlavourEnRequired: "Please Enter Flavour En",
    barCodeRequired: "Please Enter BarCode",
    unitTypeRequired: "Please Select Unit Type",
    itemTypeRequired: "Please Select Item Type",
    profitMarginRequired: "Please Enter Profit Margin",
    itemNameArRequired: "Please Enter Item Name Sl",
    itemFlavourArRequired: "Please Enter Item Flavour Sl",
    itemCodeRequired: "Please Enter Item Code",
    sellPriceRequired: "Please Enter Sell Price",
    sellPriceARequired: "Please Enter Sell PrcieA",
    sellPriceBRequired: "Please Enter Sell PriceB",
    sellPriceCRequired: "Please Enter Sell PriceC",
    sellPriceDRequired: "Please Enter Sell PriceD",
    costPriceRequired: "Please Enter Cost Price",
    branchNameRequired: "Please Select Branch",
    barcodeExists: "Barcode is already exists",
    itemCodeExists: "Item Code is already exists",
    addedItemProfileSuccessfully: "Item added successfully",
    manageIncidentReportApproveSuccesfully: "Manage Incident Report Approve Successfully",
    addedSubItem: "Sub Item added successfully",
    addedItemOffer: "Item Offer added sucessfully",
    updatedItemOffer: "Item Offer update sucessfully",
    updateSubItemProfileSucessfully: "Sub Item updated successfully",
    updateItemProfileSucessfully: "Item updated successfully",
    sameBranchName: "Please select different branch",
    baseUnitCount: "Please Enter Base Unit Count",
    sellPriceIsNotValid: "Sell Price should greater or equal to profit margin price",
    sellPriceAIsNotValid: "Sell PriceA should greater or equal to profit margin price",
    sellPriceBIsNotValid: "Sell PriceB should greater or equal to profit margin price",
    sellPriceCIsNotValid: "Sell PriceC should greater or equal to profit margin price",
    sellPriceDIsNotValid: "Sell PriceD should greater or equal to profit margin price",
    ledgerAccountExsits: "Ledger Account Already Exists",
    transcationTypeRequired: "Select Transaction Type",
    groupExists: "Group Name Already Exists",
    convertSubItemToMainItemSuccessfully: "Convert subItem to mainItem successfully",
    itemExists: "Item Already Exsits",
    itemRequired: "Item is required",
    selectPurchaseLedger: "Please select Purchase Ledger",
    validMinMaxValue: "Maximum Quantity should be greater than Minimum Quantity",
    changeMainItem: "Change main item succesfully",
    deltedItem: "Item deleted successfully",
    errorMessageForDelete: "{Item Name} having sub item(s), Please delete sub item(s) or change main item or convert sub item into main item, then delete {Item Name}",
    addLedgerAccont: "Please Add Ledger Account",
    addItem: "Please Add Item",
    quantityLimitRequired: "Please Enter Quantity Limit",
    initiatedRequired: "Please Select Initiated By",
    startDateRequired: "Please Enter Start Date",
    startDateHigher: "Start DateTime should be less than End DateTime",
    endDateRequired: "Please Enter End Date",
    startTimeRequired: "Please Enter Start Time",
    endTimeRequired: "Please Enter End Time",
    sellPriceIsNotGreaterForMainPrice: "Sell Price should be less than actual cost price",
    sellPriceAIsNotGreaterForMainPrice: "Sell PriceA should be less than actual cost price",
    sellPriceBIsNotGreaterForMainPrice: "Sell PriceB should be less than actual cost price",
    sellPriceCIsNotGreaterForMainPrice: "Sell PriceC should be less than actual cost price",
    sellPriceDIsNotGreaterForMainPrice: "Sell PriceD should be less than actual cost price",
    approveSuccessfully: "Item offer approved successfully",
    stopItemSuccessfully: "Item offer stop successfully",
    resumeItemSuccessfully: "Item offer resume successfully",
    deleteItemSuceessfully: "Item Offer deleted sucessfully",
    rejectSuccessfully: "Item offer rejected successfully",
    itemOfferAlreadyExists: "This item is already in offer",
    workFlowNotCreated: "There is no work flow created for this activity, please contact  System Administrator",
    permissionDenied: "You do not have rights to perform this operation. Please contact  System Administrator.",
    notValidQunatityLimit: "Quantity Limit should less then System Quantity",
    spoCreated: "Supplier Purchase Order Created SuccessFully",
    spoNotCreated: "Sorry,Supplier Purchase Order Could Not Be Created",
    spoUpdated: "Supplier Purchase Order Updated Successfully",
    spoNotUpdated: "Sorry,Supplier Purchase Order Could Not Be Update",
    customerProfile: "CustomerProfile added successfully",
    incidentReport: "IncidentReport submitted successfully",
    reviewIncidentReport: "IncidentReport reviwed successfully",
    incidentReportApproval: "IncidentReport approved successfully",
    incidentReportReject: "Incident rejected successfully",
    submitInventory: "Submit issue inventory successfully",
    reviewIssueInventory: "IssueInventory reviwed successfully",
    approvalIssueInventory: "IssueInventory approved successfully",
    rejectIssueInventory: "IssueInventory rejected successfully",
    submitInventoryTransfer: "Initiate internal transfer goods successfully",
    receiveTransferInventory: "Received internal transfer goods successfully",
    itemErrorMessage: " Item with this barcode does not exist",
    itemQuantityErrorMessage: "Branch does not have reqested quantity",
    reSubmitIssueInventory: "Re-Submit issue inventory successfully",
    cpoListEmptyError: "No Item Added to Purchase Order",
    noDataFound: "No Data Found",
    validAmountError: "Please Enter Valid Amount",
    branchSelectError: "Please Select Collecting Branch",
    dueDateError: "Please Select DueDate",
    itemAddedTOPOList: "Item Has Already Been Added To Purchase Order",
    addCostAddedError: "Additional Cost Has Already Been Added To Purchase Order",
    noItemAddedToPO: "Please Add Items to Purchase Order.",
    quantityLimitError: "Please Add Quantity Less Than Or Equal To Available Quantity.",
    validQuantityError: "Please Enter Valid Quantity",
    customerNotFound: "Customer Not Found",
    itemNotFound: "Item Not Found",
    inActiveCustomerError: "Customer is Inactive. You cannot create CPO for this Customer.",
    deleteConfirmation: "Delete Confirmation",
    deleteConfirmMessage: "Are you sure you want to delete ?",
    downPaymentNotFound: "No Down Payment Detail Found",
    cpoDeleteConfirmation: "Are you sure you want to delete CPO?",
    cpoItem: "Customer Puchase Order Item",
    cpoNotFound: "No Customer Purchase Order Found",
    excessCPOAmountError: "Do You Want To Pay More Than Purchase Order Amount ?",
    payDownPayment: "Please Pay The Down Payment Amount.",
    yourBalIs: "Your balance is ",
    plsPayRemainingAmt: ". Please pay the remaining amount.",
    only: "Only ",
    available: " available at your disposal.",
    rejectConfirmation: "Are you sure you want to Reject ?",
    rejectConfirm: "Reject Confirmation",
    noICRFound: "No Item Change Request Found",
    priceChangeRequest: "Price Change Request",
    quantityChangeRequest: "Quantity Change Request",
    rejected: "Rejected",
    noItemFound: "No Item Found",
    noCategoryFound: "No Category Found",
    categoryDeleteFailed: "Sorry Could Not Be Deleted",
    supplierNotFound: "No Suppliers found.",
    contactNotFound: "No Contacts found.",
    supplierDeleteFail: "Sorry Supplier Could Not Be Deleted",
    validCostPriceError: "Please Enter Valid Cost Price",
    ownBranchSelectError: "Please Select Your Branch",
    quantityCPError: "Please Mention Quantity and Cost Price of Items Added in Purchase Order.",
    itemAddedError: "Item Already added to Purchase Order.",
    lessQuantityPlease: "Please Add Quantity Less Than ",
    billNotFound: "No Bill Found",
    receivePODetails: "Received Purchase Order Details",
    spoCannotBeReceive: "Supplier Purchase Order Has Not Been Send To Supplier Yet. Thus, Can't Be Received.",
    endReceiveConfirmation: "End Receiving Confirmation",
    billAmtExceedError: "The bill amount is exceeding total item cost .Do you want to continue ?",
    endReceiving: "End Receiving",
    billNumberReq: "Please Enter Bill Number",
    warning: "Warning",
    srrExists: "Supplier Return Request has already been made for this item. Do you want to continue ?",
    noPOFound: "No Purchase Orders to show",
    canDeleteItemSupplier: "Delete Item Supplier Validation",
    canDeleteItemSupplierMessage: "Supplier can not be deleted from this category as there is pending SPO with this combination.",
    issuestockDeleteConfirmationMessage: "Are you sure you want to delete issue stock inventory request.?",
    itemDeleteConfirmationMessage: "Are you sure you want to remove item from item list. ?",
    AutomaticPOPopup: "Create workflow for Supplier Purchase Order in order to apply 'Create Automatic PO' functionality on item.",
    paymentModeList: [
        {
            Id: 0,
            Name: 'Received from Customer'
        },
        {
            Id: 1,
            Name: 'Paid to Customer'
        }
    ],

    choiceList: [
        {
            Id: 1,
            Name: 'Add'
        },
        {
            Id: 2,
            Name: 'Subtract'
        }
    ],
    priceCategoryList: [
        {
            Id: 1,
            Name: 'Normal Price'
        },
        {
            Id: 2,
            Name: 'A'
        },
        {
            Id: 3,
            Name: 'B'
        },
        {
            Id: 4,
            Name: 'C'
        },
        {
            Id: 5,
            Name: 'D'
        }
    ],
    priceCategoryCollection: [{ Id: 1, Category: "NormalPrice" }, { Id: 2, Category: "A" }, { Id: 3, Category: "B" }, { Id: 4, Category: "C" }, { Id: 5, Category: "D" }],
    spoReceivingStatusList: [
        {
            Id: 0,
            Name: 'Received'
        },
        {
            Id: 1,
            Name: 'Not Received'
        },
        {
            Id: 2,
            Name: 'Partially Received'
        }
    ],
    unmatchedItemResolvedCollection: [
        {
            Id: 1,
            Name: "Do Nothing"
        }, {
            Id: 2,
            Name: "Adjust as Gain"
        }, {
            Id: 3,
            Name: "Just Adjust"
        },
        {
            Id: 4,
            Name: "Adjust as Loss"
        }
    ],
    destructioCasueList: [
        { Name: 'Expire', Id: '75' },
        { Name: 'Damage', Id: '74' }
    ],
    initiatedList: [
        { Name: 'Supplier', Id: '1' },
        { Name: 'Owner', Id: '2' }
    ],
    statusList: [
        { Name: 'Do Nothing', Id: '63' },
        { Name: 'Gain', Id: '64' },
        { Name: 'Loss', Id: '69' },
        { Name: 'Matched', Id: '62' }
    ],
    statusTypeList: [
        { Name: 'Reconciled', Id: '26' },
        { Name: 'Verified', Id: '27' },
        { Name: 'Confirmed', Id: '28' }
    ],
    transactionTypeRequired: "Please Select Transaction Type",
    nonTransactionAmountRequired: "Please Enter Amount",
    remarkRequired: "Please Enter Remark",
    nonSalesTransactionAddedsucessfully: "Non sales transaction added sucessfully",
    deltedNonSalesTransactionSucessfully: "Non Sales transaction deleted sucessfully",
    cashierNameRequired: "Please Select Cashier",
    matchedForCurrentPayment: "New payment bill amount same as current payment bill amount",
    sessionBillPaymentMethodChangeSuccesfully: "Payment method changed successfully",
    deletePOSSessionReturnBill: "Return Bill Deleted Sucessfully",
    sessionBillClosingSucessfully: "Session Bill Closing Save Sucessfully",
    sessionSubmitBillClosingSucessfully: "Session Bill Closing Submit Sucessfully",
    sessionUpdateBillClosingSucessfully: "Session Bill Closing Update Sucessfully",
    sessionVarificationBillClosingSucessfully: "Session Bill Closing Varification Sucessfully",
    sessionApproveBillClosingSucessfully: "Session Bill Closing Approve Sucessfully",
    sessionRejectBillClosingSucessfully: "Session Bill Closing Rejected Sucessfully",
    returnBillSubmitedSucessfully: "Return Bill Submited Sucessfully",
    resetSucessfully: "Reset Incident Report Successfully",
    resetRequestSucessfully: "Reset Request initialized",
    resetRequestAlreadyExists: "Reset Request already initialized",
    quantityGreaterThanzero: "Quantity limit should not be 0",
    barcodeValid: "'Please enter valid barcode'(Normal Barcode length should be between {{BalnceBarcoedFrom}} and {{BalnceBarcoedTo}})",
    resolvingStatusRequird: "Please select Resolving Status",
    destructionCauseRequired: "Please select Destruction Cause",
    itemDestructionRequestSucessfully: "Item Destruction Request Submit Sucessfully",
    itemDestructionRequestApproveSucessfully: "Item Destruction Request Approve Sucessfully",
    itemDestructionRequestResubmitSucessfully: "Item Destruction Request Resubmit Sucessfully",
    itemDestructionRequestReturnSucessfully: "Item Destruction Request Return Sucessfully",
    itemDestructionRequestRejectSucessfully: "Item Destruction Request Reject Sucessfully",
    itemDestructionRequestUpdateSucessfully: "Item Destruction Request Update Sucessfully",
    itemProfileNotCreatedBecauseICRGenrated: "ICR is generated for this Item,please contact Manager in order to edit item profile",
    DestructionQuantityRequired: "Destruction quentity cannot be zero",
    chequeNoRequired: "Cheque Number is Required",
    recevingCreditNoteSuccessfully: "Credit Note Receving Sucessfully",
    issueInventoryItem: "Item cannot be deleted, Inventory recording for this item is already been issued",
    issueInventoryUpdatedItem: "Item cannot be updated, Inventory recording for this item is already been issued",
    allowSellPriceLowerCostPrice: "Less than cost price",
    allowSellPriceLowerMarginProfit: "Below Profit Margin",
    verifyBillFail: "Sorry, bill  Could Not Be Verified",
    verifySPOFail: "Sorry, supplier Purchase Order Could Not Be Verified",
    dateAlreadyExist: "Same inventory was issues before/after days, are you sure you want to issue it again?",
    currentDateAlreadyExist: " Issue inventory which is already issued on the same date",
    fullInventoryAlreadyExist: "Full inventory which is already",
    initiateInventory: "Initiate issue inventory successfully",
    submitIssueInventory: "Initiate Inventory",
    selectGroupNameRequired: "Please Select Catagory",
    detailTypeRequired: "Please Select Detail Type",
    ledegerNameRequired: "Please Enter Name",
    addedLedgeds: "Ledgers Submit Sucessfully",
    ledgerNotValid: "For subaccounts,you must select the same account type as their parent",
    notValidLedgerName: "Ledger name already exist",
    spoSubmitSuccess: "Supplier Purchase Order Submitted Successfully",
    spoSubmitFailed: "Supplier Purchase Order could not be Submitted",
    spoDeleteFailed: "Supplier Purchase Order could not be Deleted",
    spoDeleteSuccess: "Supplier Purchase Order Deleted Successfully",
    spoResubmitFail: "Sorry,supplier Purchase Order could not be Resubmitted",
    itemNotDeleted: "Supplier/Customer Purchase Order has been generated for this item",
    startDateNotValid: "Start date should not be less than today date",
    initiatorRequired: "Initiator of spo is required",
    deleted: "Deleted",
    processed: "Processed",
    alreadyActivityDone: "This activity is already processed, Please refresh the page.",
    alreadyActivityProcessed: "AlreadyActivityProcessed",
    companyBarcodeNotGernated: "Something went wrong,company barcode was not genrated",
    barcodeIsNotEditable: "Barcode is not editable",
    genrateCompanyBarcode: "Genrate Bacode",
    clearCompanyBarcode: "Clear Barcode",
    itemBarcodeValid: "Enter Valid Barcode",
    itemBaseUnitCount: "Enter Valid Base Unit Count",
    itemValidProfitMargin: "Enter Valid Profit Margin",
    itemValidSellPrice: "Enter Valid Sell Price",
    itemValidSellPriceA: "Enter Valid Sell Price A",
    itemValidSellPriceB: "Enter Valid Sell Price B",
    itemValidSellPriceC: "Enter Valid Sell Price C",
    itemValidSellPriceD: "Enter Valid Sell Price D",
    validActualQuantityError: "Enter Valid Actual Quantity",
    validMaximumQuantityError: "Enter Valid Maximum Quantity",
    validMinimumQuantityError: "Enter Valid Minimum Quantity",
    ConvertConfirmationMessage: "Are you sure you want to convert?",
    validQuantityLimit: "Enter Valid Quantity Limit",
    validBaseUnitCount: "Please enter valid Base Unit count",
    ValidDiscountMessage: "Please enter valid Discount",
    ValidZipcodeMessage: "Enter Valid Zipcode",
    ValidNoofDaysMessage: "Please Enter Valid Number of Days",
    ValidPhoneExtensionMessage: "Please Enter Valid Phone Extension",
    validPriceError: "Please enter valid Price",
    ValidReturnQuantity: "Enter Valid Return Quantity",
    ValidMobileNoMessage: "Mobile number should be minimum 10 digit and maximum 15 digit",
    ValidPhoneNoMessage: "Phone number should be minimum 10 digit and maximum 15 digit",
    ExistMobileNoMesssage: "Mobile number already exist",
    validIncidentQuantity: "Please enter valid Incident Quantity",
    noRecordFound: "No Record found",
    itemDestructionReceipt: "<b>Note:</b>Click on OK button to generate ITEM DESTRUCTION receipt.",
    validDestructionQuantity: "Please enter valid Destruction Quantity",
    itemAddedToRIMessage: "Item Has Already Been Added To Request Item",
    ItemDestructed: "Items of same supplier can only be destructed.",
    notAcceptExpiredItem: "This supplier does not accept return for expired items.",
    DestructionExists: "Destruction request already exists.",
    NoLedgersfound: "No Ledgers found",
    ValidReturningQty: "Enter Valid Returning Quantity",
    ValidReturnItemAmt: "Please Enter Valid Return Substituted Items Amount",
    ValidCashMessage: "Please Enter Valid Cash",
    ValidDebitCardAmt: "Please Enter Valid Debit Card Amount",
    ValidCreditCardAmt: "Please Enter Valid Credit Card Amount",
    ValidChequeAmt: "Please Enter Valid Cheque Amount",
    ValidCouponAmt: "Please Enter Valid Coupon Amount",
    SalesTransaction: "Sales Transaction",
    NonSalesTransaction: "Non Sales Transaction",
    ProfileTab: "Profile Details",
    ContactInfoTab: "Contact Person",
    yes: "Yes",
    no: "No",
    OrderCollected: "Order Collected",
    PendingCollection: "Pending Collection",
    CPOCanceled: "Customer Purchase Order Canceled Successfully",
    CPOUpdated: "Customer Purchase Order Updated Successfully",
    CPOPaymentDone: "Customer Purchase Order Payment Done  Successfully",
    CPOCreated: "Customer Purchase Order Created Successfully",
    OopsErrorMessage: "Oops !! Some Error.",
    AlreadyPaymentdoneCPO: "Payment Already Done For CPO",
    SorryNoItems: "Sorry No Items",
    NoPermission: "Permission not allow",
    SelectItemorBarcode: "Please Select Item or Enter Valid Barcode",
    ICRResubmitted: "Item Change Request Resubmitted Successfully",
    ICRFailedResubmit: "Failed to Resubmit Item Change Request ",
    ICRApprovalSuccessful: "Item Change Request Approval Successful",
    ICRApprovalFailed: "Item Change Request Approval Failed",
    ICRReviewSuccessful: "Item Change Request Review Successful",
    ICRReviewFailed: "Item Change Request Review Failed",
    ICRReturnedSuccessful: "Item Change Request Returned Successfully",
    ICRReturnedFailed: "Item Change Request Return Failed",
    ICRRejectedSuccessful: "Item Change Request Rejected Successfully",
    ICRRejectedFailed: "Item Change Request Reject Failed",
    ErrorinFetchingBranch: "Some Error in fetching Branch List",
    ItemNotFetched: "Item could not be fetched",
    ICRNotInitiated: "Item Has Valid Item Offer. Item Change Request Cannot be Initiated",
    IPCRAlreadyGenerated: "Item Price Change Request has already been Generated",
    CategoryListNotFetched: "Category list could not be fetched",
    UnitListNotFetch: "Unit list could not be fetched",
    ICRInitiatedSuccessful: "Item Change Request Initiated Successfully",
    ICRInitiatedFailed: "Item Change Request Initiation Failed",
    ICRUpdetedSuccessfully: "Item Change Request Updated Successfully",
    ICRUpdeteFailed: "Failed to Update Item Change Request ",
    CompanyConfigNotMatched: "Company Configuration could not be fetched",
    ErrorinFetchingReturnCauseList: "Some Error in fetching Return Cause List",
    ErrorinFetchingSRRList: "Some Error in fetching Supplier Return Request List",
    ErrorinFetchingItems: "Some Error in fetching Item List",
    alreadyAddedtoReturnedList: "Item has already been added to Items to be Returned list",
    ReturnSameSupplierItem: "Items of same Supplier can only be returned.",
    SRRUpdetedSuccessfully: "Updated Supplier Return Request Successfully",
    ErrorinUpdatingSRR: "Some Error in Updating Supplier Return Request",
    SRRSavedSucceessfully: "Saved Supplier Return Request Successfully",
    SRRCompletedSucceessfully: "Supplier Return Request Completed Successfully",
    SRRReceiptGenerationFailed: "Supplier Return Request Receipt Generation Failed",
    ErrorinSavingSRR: "Some Error in Saving Supplier Return Request",
    AddReturnedItem: "Please Add Items to be Returned.",
    NotReturnMoreQauntity: "Cannot return more than system quantity.",
    ErrorFromOurSide: "Some Error from our side",
    SRRRejectedSuccessfully: "Supplier Return Request Rejected Successfully",
    SRRRejectFailed: "Some Error in Rejecting Supplier Return Request",
    SRRDeletedSuccessfully: "Supplier Return Request Deleted Successfully",
    SRRDeleteFailed: "Some Error in Deleting Supplier Return Request",
    SRRReturnSuccessfully: "Supplier Return Request Return Successful",
    SRRReturnFailed: "Supplier Return Request Return Failed",
    SRRApprovalSuccessful: "Supplier Return Request Approval Successful",
    SRRApprovalFailed: "Supplier Return Request Approval Failed",
    SRRResubmitSuccessfully: "Supplier Return Request Resubmitted Successfully",
    SRRResubmitFailed: "Failed to Resubmit Supplier Return Request ",
    SupplierAddedSuccessFully: "Supplier Added Successfully",
    DaysLimitforCreditSupplier: "Total Days Limit must be more than 0 for Credit Supplier",
    SupplierDeletedSuccessfully: "Supplier Deleted Successfully",
    SupplierUpdatedSuccessfully: "Supplier Updated Successfully",
    CanNotSetInactive: "You cannot set this Supplier Inactive",
    ChooseSupplier: "Choose a supplier first.",
    ContactAdded: "Contact Person Added Successfully",
    ContactDeleted: "Contact Deleted Successfully",
    SPOApproved: "Supplier Purchase Order Approved",
    SPOApprovedFailed: "Sorry. Supplier Purchase Order could not be approved",
    SPOReviewedSuccessfully: "Supplier Purchase Order Reviewed Successfully",
    SPOReviewedFailed: "Sorry. Supplier Purchase Order could not be Reviewed",
    SPOResubmittedSuccessfully: "Supplier Purchase Order Resubmitted Successfully",
    SPONotEmit: "Supplier Purchase Order has not been emailed to the Supplier",
    SPONotSend: "Sorry. Supplier Purchase Order could not be send",
    SPORejected: "Supplier Purchase Order Rejected",
    SPOCancelled: "Supplier Purchase Order Cancelled",
    SPONotCancelled: "Sorry. Supplier Purchase Order Could Not Be Cancelled.",
    SPOCancelledApproved: "Supplier Purchase Order Cancellation Approved Successfully",
    SPOCancelledRejected: "Supplier Purchase Order Cancellation Rejected Successfully",
    SPOCancelledApprovedFailed: "Sorry.Supplier Purchase Order Cancellation Approval was not Successful",
    SPOCancelledRejectedFailed: "Sorry.Supplier Purchase Order Cancellation Rejection was not Successful",
    BillListNotFetched: "Sorry. Bill List Could Not Be Fetched.",
    BillVerified: "Bill Verified Successfully",
    SPOVerified: "Supplier Purchase Order Verified Successfully",
    VerifyFirst: "Verify all the bills first",
    BillNotFound: "Sorry. Bill not found",
    SPOSavedSuccessfully: "Supplier Purchase Order Saved Successfully",
    ICRAlreadyGenerated: "ICR is already generated for item",
    BillNotPaid: "Sorry. Bill/s cannot be paid",
    CNNotFetched: "Sorry. Credit Note could not be fetched",
    SPOPAymentDone: "SPO Payment done successfully",
    PaymentNotDone: "Sorry. Payment could not be made.",
    BillAdded: "Bill Added Successfully",
    UniqueBillNo: "Unique Bill Number Is Required.",
    BillUpdated: "Bill Updated Successfully",
    BillUpdateFailed: "Sorry. Bill Could Not Be Updated.",
    BillAddedFailed: "Sorry. Bill Could Not Be Added.",
    BillDeleted: "Bill Deleted Successfully",
    BillDeletedFailed: "Sorry. Bill Could Not Be Deleted.",
    AlreadyItemReceived: "Item is already received",
    ItemReceivedPartially: "Item Received Partially",
    ItemReceived: "Item Received Successfully",
    ItemNotReceived: "Item Could Not Be Received",
    ReceivingQtyNotMoreThanOrderedQty: "Receiving Quantity cannot be more than Ordered Quantity",
    AfterReceivingProcessMsg: "After ending receiving process, no items of this purchase order can be received. Do you want to continue ?",
    EndReceivingNotPerformed: "End Receiving cannot be performed as not all items are received.",
    AmountofBillNotMatched: "The total amount on Bill does with match with total cost of received items, please check amount and received items.",
    ReceivedSuccessfully: "Received Successfully",
    ReceivingFailed: "Sorry. Could Not Be Received",
    SavedSuccessfully: "Saved Successfully",
    SavedFailed: "Sorry. Could Not Be Saved",
    CompareCostSellPrice: "Cost Price is {ModifyingCostPrice} which should not be more than Sell Price.",
    CompareCostSellProfitPrice: "Cost Price(with Profit Margin) is {ModifyingCostPrice} which should not be more than Sell Price. Do you want to continue ?",
    CompareCostSellPriceContinue: "Cost Price is {ModifyingCostPrice} which is more than Sell Price. Do you want to continue ?",
    BillNoNotFound: "{Billno} not found",
    BillNoNotPaid: "{BillNo} cannot be paid as futher approval is required",
    ICRGenerated: "ICR is generated for item with Bill Number {BillNo}",
    NotDeleteMainItem: '<b>{result}</b> having sub item(s), Please delete sub item(s) or change main item or convert sub item into main item, then delete <b>{result}</b>.',
    NotReceiveQuantity: "Sorry. Item Could Not Be Received as Receiving Quantity is {ReceiveQuantity}",
    NotReceiveCostPrice: "Sorry. Item Could Not Be Received as Receiving Cost Price is {ReceiveCostPrice}",
    itemNotReceived: "Sorry. Item Could Not Be Received as ICR is Generated for {ItemName}",
    BillAmountDifference: "The bill amount is exceeding total item cost by {difference}. Do you want to continue ?",
    ChartLabelUsername: "UserName",
    ChartLabelQtyProgress: "Quantity Progress"
};