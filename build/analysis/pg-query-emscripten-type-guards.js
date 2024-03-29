"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPgNextValueExpr = exports.isPgCurrentOfExpr = exports.isPgSetToDefault = exports.isPgCoerceToDomainValue = exports.isPgCoerceToDomain = exports.isPgBooleanTest = exports.isPgNullTest = exports.isPgXmlExpr = exports.isPgSQLValueFunction = exports.isPgMinMaxExpr = exports.isPgCoalesceExpr = exports.isPgRowCompareExpr = exports.isPgRowExpr = exports.isPgArrayExpr = exports.isPgCaseTestExpr = exports.isPgCaseWhen = exports.isPgCaseExpr = exports.isPgCollateExpr = exports.isPgConvertRowtypeExpr = exports.isPgArrayCoerceExpr = exports.isPgCoerceViaIO = exports.isPgRelabelType = exports.isPgFieldStore = exports.isPgFieldSelect = exports.isPgAlternativeSubPlan = exports.isPgSubPlan = exports.isPgSubLink = exports.isPgBoolExpr = exports.isPgScalarArrayOpExpr = exports.isPgOpExpr = exports.isPgNamedArgExpr = exports.isPgFuncExpr = exports.isPgArrayRef = exports.isPgWindowFunc = exports.isPgGroupingFunc = exports.isPgAggref = exports.isPgParam = exports.isPgConst = exports.isPgVar = exports.isPgExpr = exports.isPgIntoClause = exports.isPgTableFunc = exports.isPgRangeVar = exports.isPgAlias = exports.isPgNull = exports.isPgBitString = exports.isPgString = exports.isPgFloat = exports.isPgInteger = exports.isPgNodeArray = void 0;
exports.isPgInferClause = exports.isPgWithClause = exports.isPgRowMarkClause = exports.isPgWindowClause = exports.isPgGroupingSet = exports.isPgSortGroupClause = exports.isPgWithCheckOption = exports.isPgTableSampleClause = exports.isPgRangeTblFunction = exports.isPgRangeTblEntry = exports.isPgPartitionCmd = exports.isPgPartitionRangeDatum = exports.isPgPartitionBoundSpec = exports.isPgPartitionSpec = exports.isPgPartitionElem = exports.isPgXmlSerialize = exports.isPgLockingClause = exports.isPgDefElem = exports.isPgIndexElem = exports.isPgTableLikeClause = exports.isPgColumnDef = exports.isPgRangeTableSample = exports.isPgRangeTableFuncCol = exports.isPgRangeTableFunc = exports.isPgRangeFunction = exports.isPgRangeSubselect = exports.isPgWindowDef = exports.isPgSortBy = exports.isPgMultiAssignRef = exports.isPgResTarget = exports.isPgA_ArrayExpr = exports.isPgA_Indirection = exports.isPgA_Indices = exports.isPgA_Star = exports.isPgFuncCall = exports.isPgRoleSpec = exports.isPgCollateClause = exports.isPgTypeCast = exports.isPgA_Const = exports.isPgA_Expr = exports.isPgParamRef = exports.isPgColumnRef = exports.isPgTypeName = exports.isPgQuery = exports.isPgOnConflictExpr = exports.isPgFromExpr = exports.isPgJoinExpr = exports.isPgRangeTblRef = exports.isPgTargetEntry = exports.isPgInferenceElem = void 0;
exports.isPgAlterRoleStmt = exports.isPgCreateRoleStmt = exports.isPgCreatePLangStmt = exports.isPgAlterEventTrigStmt = exports.isPgCreateEventTrigStmt = exports.isPgCreateTrigStmt = exports.isPgCreateAmStmt = exports.isPgAlterPolicyStmt = exports.isPgCreatePolicyStmt = exports.isPgImportForeignSchemaStmt = exports.isPgDropUserMappingStmt = exports.isPgAlterUserMappingStmt = exports.isPgCreateUserMappingStmt = exports.isPgCreateForeignTableStmt = exports.isPgAlterForeignServerStmt = exports.isPgCreateForeignServerStmt = exports.isPgAlterFdwStmt = exports.isPgCreateFdwStmt = exports.isPgAlterExtensionContentsStmt = exports.isPgAlterExtensionStmt = exports.isPgCreateExtensionStmt = exports.isPgAlterTableMoveAllStmt = exports.isPgAlterTableSpaceOptionsStmt = exports.isPgDropTableSpaceStmt = exports.isPgCreateTableSpaceStmt = exports.isPgConstraint = exports.isPgCreateStmt = exports.isPgVariableShowStmt = exports.isPgVariableSetStmt = exports.isPgCopyStmt = exports.isPgAlterDefaultPrivilegesStmt = exports.isPgGrantRoleStmt = exports.isPgAccessPriv = exports.isPgObjectWithArgs = exports.isPgGrantStmt = exports.isPgAlterDomainStmt = exports.isPgAlterCollationStmt = exports.isPgAlterTableCmd = exports.isPgReplicaIdentityStmt = exports.isPgAlterTableStmt = exports.isPgCreateSchemaStmt = exports.isPgSetOperationStmt = exports.isPgSelectStmt = exports.isPgUpdateStmt = exports.isPgDeleteStmt = exports.isPgInsertStmt = exports.isPgRawStmt = exports.isPgTriggerTransition = exports.isPgCommonTableExpr = exports.isPgOnConflictClause = void 0;
exports.isPgRefreshMatViewStmt = exports.isPgCreateTableAsStmt = exports.isPgExplainStmt = exports.isPgVacuumStmt = exports.isPgClusterStmt = exports.isPgAlterSystemStmt = exports.isPgDropdbStmt = exports.isPgAlterDatabaseSetStmt = exports.isPgAlterDatabaseStmt = exports.isPgCreatedbStmt = exports.isPgLoadStmt = exports.isPgViewStmt = exports.isPgAlterEnumStmt = exports.isPgCreateRangeStmt = exports.isPgCreateEnumStmt = exports.isPgCompositeTypeStmt = exports.isPgTransactionStmt = exports.isPgUnlistenStmt = exports.isPgListenStmt = exports.isPgNotifyStmt = exports.isPgRuleStmt = exports.isPgAlterOperatorStmt = exports.isPgAlterOwnerStmt = exports.isPgAlterObjectSchemaStmt = exports.isPgAlterObjectDependsStmt = exports.isPgRenameStmt = exports.isPgInlineCodeBlock = exports.isPgDoStmt = exports.isPgAlterFunctionStmt = exports.isPgFunctionParameter = exports.isPgCreateFunctionStmt = exports.isPgCreateStatsStmt = exports.isPgIndexStmt = exports.isPgFetchStmt = exports.isPgClosePortalStmt = exports.isPgDeclareCursorStmt = exports.isPgSecLabelStmt = exports.isPgCommentStmt = exports.isPgTruncateStmt = exports.isPgDropStmt = exports.isPgAlterOpFamilyStmt = exports.isPgCreateOpFamilyStmt = exports.isPgCreateOpClassItem = exports.isPgCreateOpClassStmt = exports.isPgCreateDomainStmt = exports.isPgDefineStmt = exports.isPgAlterSeqStmt = exports.isPgCreateSeqStmt = exports.isPgDropRoleStmt = exports.isPgAlterRoleSetStmt = void 0;
exports.isPgDropSubscriptionStmt = exports.isPgAlterSubscriptionStmt = exports.isPgCreateSubscriptionStmt = exports.isPgAlterPublicationStmt = exports.isPgCreatePublicationStmt = exports.isPgAlterTSConfigurationStmt = exports.isPgAlterTSDictionaryStmt = exports.isPgReassignOwnedStmt = exports.isPgDropOwnedStmt = exports.isPgDeallocateStmt = exports.isPgExecuteStmt = exports.isPgPrepareStmt = exports.isPgCreateTransformStmt = exports.isPgCreateCastStmt = exports.isPgCreateConversionStmt = exports.isPgReindexStmt = exports.isPgConstraintsSetStmt = exports.isPgLockStmt = exports.isPgDiscardStmt = exports.isPgCheckPointStmt = void 0;
const isPgNodeArray = (obj) => Array.isArray(obj);
exports.isPgNodeArray = isPgNodeArray;
const isPgInteger = (obj) => !!obj.Integer;
exports.isPgInteger = isPgInteger;
const isPgFloat = (obj) => !!obj.Float;
exports.isPgFloat = isPgFloat;
const isPgString = (obj) => !!obj.String;
exports.isPgString = isPgString;
const isPgBitString = (obj) => !!obj.BitString;
exports.isPgBitString = isPgBitString;
const isPgNull = (obj) => !!obj.Null;
exports.isPgNull = isPgNull;
const isPgAlias = (obj) => !!obj.Alias;
exports.isPgAlias = isPgAlias;
const isPgRangeVar = (obj) => !!obj.RangeVar;
exports.isPgRangeVar = isPgRangeVar;
const isPgTableFunc = (obj) => !!obj.TableFunc;
exports.isPgTableFunc = isPgTableFunc;
const isPgIntoClause = (obj) => !!obj.IntoClause;
exports.isPgIntoClause = isPgIntoClause;
const isPgExpr = (obj) => !!obj.Expr;
exports.isPgExpr = isPgExpr;
const isPgVar = (obj) => !!obj.Var;
exports.isPgVar = isPgVar;
const isPgConst = (obj) => !!obj.Const;
exports.isPgConst = isPgConst;
const isPgParam = (obj) => !!obj.Param;
exports.isPgParam = isPgParam;
const isPgAggref = (obj) => !!obj.Aggref;
exports.isPgAggref = isPgAggref;
const isPgGroupingFunc = (obj) => !!obj.GroupingFunc;
exports.isPgGroupingFunc = isPgGroupingFunc;
const isPgWindowFunc = (obj) => !!obj.WindowFunc;
exports.isPgWindowFunc = isPgWindowFunc;
const isPgArrayRef = (obj) => !!obj.ArrayRef;
exports.isPgArrayRef = isPgArrayRef;
const isPgFuncExpr = (obj) => !!obj.FuncExpr;
exports.isPgFuncExpr = isPgFuncExpr;
const isPgNamedArgExpr = (obj) => !!obj.NamedArgExpr;
exports.isPgNamedArgExpr = isPgNamedArgExpr;
const isPgOpExpr = (obj) => !!obj.OpExpr;
exports.isPgOpExpr = isPgOpExpr;
const isPgScalarArrayOpExpr = (obj) => !!obj.ScalarArrayOpExpr;
exports.isPgScalarArrayOpExpr = isPgScalarArrayOpExpr;
const isPgBoolExpr = (obj) => !!obj.BoolExpr;
exports.isPgBoolExpr = isPgBoolExpr;
const isPgSubLink = (obj) => !!obj.SubLink;
exports.isPgSubLink = isPgSubLink;
const isPgSubPlan = (obj) => !!obj.SubPlan;
exports.isPgSubPlan = isPgSubPlan;
const isPgAlternativeSubPlan = (obj) => !!obj.AlternativeSubPlan;
exports.isPgAlternativeSubPlan = isPgAlternativeSubPlan;
const isPgFieldSelect = (obj) => !!obj.FieldSelect;
exports.isPgFieldSelect = isPgFieldSelect;
const isPgFieldStore = (obj) => !!obj.FieldStore;
exports.isPgFieldStore = isPgFieldStore;
const isPgRelabelType = (obj) => !!obj.RelabelType;
exports.isPgRelabelType = isPgRelabelType;
const isPgCoerceViaIO = (obj) => !!obj.CoerceViaIO;
exports.isPgCoerceViaIO = isPgCoerceViaIO;
const isPgArrayCoerceExpr = (obj) => !!obj.ArrayCoerceExpr;
exports.isPgArrayCoerceExpr = isPgArrayCoerceExpr;
const isPgConvertRowtypeExpr = (obj) => !!obj.ConvertRowtypeExpr;
exports.isPgConvertRowtypeExpr = isPgConvertRowtypeExpr;
const isPgCollateExpr = (obj) => !!obj.CollateExpr;
exports.isPgCollateExpr = isPgCollateExpr;
const isPgCaseExpr = (obj) => !!obj.CaseExpr;
exports.isPgCaseExpr = isPgCaseExpr;
const isPgCaseWhen = (obj) => !!obj.CaseWhen;
exports.isPgCaseWhen = isPgCaseWhen;
const isPgCaseTestExpr = (obj) => !!obj.CaseTestExpr;
exports.isPgCaseTestExpr = isPgCaseTestExpr;
const isPgArrayExpr = (obj) => !!obj.ArrayExpr;
exports.isPgArrayExpr = isPgArrayExpr;
const isPgRowExpr = (obj) => !!obj.RowExpr;
exports.isPgRowExpr = isPgRowExpr;
const isPgRowCompareExpr = (obj) => !!obj.RowCompareExpr;
exports.isPgRowCompareExpr = isPgRowCompareExpr;
const isPgCoalesceExpr = (obj) => !!obj.CoalesceExpr;
exports.isPgCoalesceExpr = isPgCoalesceExpr;
const isPgMinMaxExpr = (obj) => !!obj.MinMaxExpr;
exports.isPgMinMaxExpr = isPgMinMaxExpr;
const isPgSQLValueFunction = (obj) => !!obj.SQLValueFunction;
exports.isPgSQLValueFunction = isPgSQLValueFunction;
const isPgXmlExpr = (obj) => !!obj.XmlExpr;
exports.isPgXmlExpr = isPgXmlExpr;
const isPgNullTest = (obj) => !!obj.NullTest;
exports.isPgNullTest = isPgNullTest;
const isPgBooleanTest = (obj) => !!obj.BooleanTest;
exports.isPgBooleanTest = isPgBooleanTest;
const isPgCoerceToDomain = (obj) => !!obj.CoerceToDomain;
exports.isPgCoerceToDomain = isPgCoerceToDomain;
const isPgCoerceToDomainValue = (obj) => !!obj.CoerceToDomainValue;
exports.isPgCoerceToDomainValue = isPgCoerceToDomainValue;
const isPgSetToDefault = (obj) => !!obj.SetToDefault;
exports.isPgSetToDefault = isPgSetToDefault;
const isPgCurrentOfExpr = (obj) => !!obj.CurrentOfExpr;
exports.isPgCurrentOfExpr = isPgCurrentOfExpr;
const isPgNextValueExpr = (obj) => !!obj.NextValueExpr;
exports.isPgNextValueExpr = isPgNextValueExpr;
const isPgInferenceElem = (obj) => !!obj.InferenceElem;
exports.isPgInferenceElem = isPgInferenceElem;
const isPgTargetEntry = (obj) => !!obj.TargetEntry;
exports.isPgTargetEntry = isPgTargetEntry;
const isPgRangeTblRef = (obj) => !!obj.RangeTblRef;
exports.isPgRangeTblRef = isPgRangeTblRef;
const isPgJoinExpr = (obj) => !!obj.JoinExpr;
exports.isPgJoinExpr = isPgJoinExpr;
const isPgFromExpr = (obj) => !!obj.FromExpr;
exports.isPgFromExpr = isPgFromExpr;
const isPgOnConflictExpr = (obj) => !!obj.OnConflictExpr;
exports.isPgOnConflictExpr = isPgOnConflictExpr;
const isPgQuery = (obj) => !!obj.Query;
exports.isPgQuery = isPgQuery;
const isPgTypeName = (obj) => !!obj.TypeName;
exports.isPgTypeName = isPgTypeName;
const isPgColumnRef = (obj) => !!obj.ColumnRef;
exports.isPgColumnRef = isPgColumnRef;
const isPgParamRef = (obj) => !!obj.ParamRef;
exports.isPgParamRef = isPgParamRef;
const isPgA_Expr = (obj) => !!obj.A_Expr;
exports.isPgA_Expr = isPgA_Expr;
const isPgA_Const = (obj) => !!obj.A_Const;
exports.isPgA_Const = isPgA_Const;
const isPgTypeCast = (obj) => !!obj.TypeCast;
exports.isPgTypeCast = isPgTypeCast;
const isPgCollateClause = (obj) => !!obj.CollateClause;
exports.isPgCollateClause = isPgCollateClause;
const isPgRoleSpec = (obj) => !!obj.RoleSpec;
exports.isPgRoleSpec = isPgRoleSpec;
const isPgFuncCall = (obj) => !!obj.FuncCall;
exports.isPgFuncCall = isPgFuncCall;
const isPgA_Star = (obj) => !!obj.A_Star;
exports.isPgA_Star = isPgA_Star;
const isPgA_Indices = (obj) => !!obj.A_Indices;
exports.isPgA_Indices = isPgA_Indices;
const isPgA_Indirection = (obj) => !!obj.A_Indirection;
exports.isPgA_Indirection = isPgA_Indirection;
const isPgA_ArrayExpr = (obj) => !!obj.A_ArrayExpr;
exports.isPgA_ArrayExpr = isPgA_ArrayExpr;
const isPgResTarget = (obj) => !!obj.ResTarget;
exports.isPgResTarget = isPgResTarget;
const isPgMultiAssignRef = (obj) => !!obj.MultiAssignRef;
exports.isPgMultiAssignRef = isPgMultiAssignRef;
const isPgSortBy = (obj) => !!obj.SortBy;
exports.isPgSortBy = isPgSortBy;
const isPgWindowDef = (obj) => !!obj.WindowDef;
exports.isPgWindowDef = isPgWindowDef;
const isPgRangeSubselect = (obj) => !!obj.RangeSubselect;
exports.isPgRangeSubselect = isPgRangeSubselect;
const isPgRangeFunction = (obj) => !!obj.RangeFunction;
exports.isPgRangeFunction = isPgRangeFunction;
const isPgRangeTableFunc = (obj) => !!obj.RangeTableFunc;
exports.isPgRangeTableFunc = isPgRangeTableFunc;
const isPgRangeTableFuncCol = (obj) => !!obj.RangeTableFuncCol;
exports.isPgRangeTableFuncCol = isPgRangeTableFuncCol;
const isPgRangeTableSample = (obj) => !!obj.RangeTableSample;
exports.isPgRangeTableSample = isPgRangeTableSample;
const isPgColumnDef = (obj) => !!obj.ColumnDef;
exports.isPgColumnDef = isPgColumnDef;
const isPgTableLikeClause = (obj) => !!obj.TableLikeClause;
exports.isPgTableLikeClause = isPgTableLikeClause;
const isPgIndexElem = (obj) => !!obj.IndexElem;
exports.isPgIndexElem = isPgIndexElem;
const isPgDefElem = (obj) => !!obj.DefElem;
exports.isPgDefElem = isPgDefElem;
const isPgLockingClause = (obj) => !!obj.LockingClause;
exports.isPgLockingClause = isPgLockingClause;
const isPgXmlSerialize = (obj) => !!obj.XmlSerialize;
exports.isPgXmlSerialize = isPgXmlSerialize;
const isPgPartitionElem = (obj) => !!obj.PartitionElem;
exports.isPgPartitionElem = isPgPartitionElem;
const isPgPartitionSpec = (obj) => !!obj.PartitionSpec;
exports.isPgPartitionSpec = isPgPartitionSpec;
const isPgPartitionBoundSpec = (obj) => !!obj.PartitionBoundSpec;
exports.isPgPartitionBoundSpec = isPgPartitionBoundSpec;
const isPgPartitionRangeDatum = (obj) => !!obj.PartitionRangeDatum;
exports.isPgPartitionRangeDatum = isPgPartitionRangeDatum;
const isPgPartitionCmd = (obj) => !!obj.PartitionCmd;
exports.isPgPartitionCmd = isPgPartitionCmd;
const isPgRangeTblEntry = (obj) => !!obj.RangeTblEntry;
exports.isPgRangeTblEntry = isPgRangeTblEntry;
const isPgRangeTblFunction = (obj) => !!obj.RangeTblFunction;
exports.isPgRangeTblFunction = isPgRangeTblFunction;
const isPgTableSampleClause = (obj) => !!obj.TableSampleClause;
exports.isPgTableSampleClause = isPgTableSampleClause;
const isPgWithCheckOption = (obj) => !!obj.WithCheckOption;
exports.isPgWithCheckOption = isPgWithCheckOption;
const isPgSortGroupClause = (obj) => !!obj.SortGroupClause;
exports.isPgSortGroupClause = isPgSortGroupClause;
const isPgGroupingSet = (obj) => !!obj.GroupingSet;
exports.isPgGroupingSet = isPgGroupingSet;
const isPgWindowClause = (obj) => !!obj.WindowClause;
exports.isPgWindowClause = isPgWindowClause;
const isPgRowMarkClause = (obj) => !!obj.RowMarkClause;
exports.isPgRowMarkClause = isPgRowMarkClause;
const isPgWithClause = (obj) => !!obj.WithClause;
exports.isPgWithClause = isPgWithClause;
const isPgInferClause = (obj) => !!obj.InferClause;
exports.isPgInferClause = isPgInferClause;
const isPgOnConflictClause = (obj) => !!obj.OnConflictClause;
exports.isPgOnConflictClause = isPgOnConflictClause;
const isPgCommonTableExpr = (obj) => !!obj.CommonTableExpr;
exports.isPgCommonTableExpr = isPgCommonTableExpr;
const isPgTriggerTransition = (obj) => !!obj.TriggerTransition;
exports.isPgTriggerTransition = isPgTriggerTransition;
const isPgRawStmt = (obj) => !!obj.RawStmt;
exports.isPgRawStmt = isPgRawStmt;
const isPgInsertStmt = (obj) => !!obj.InsertStmt;
exports.isPgInsertStmt = isPgInsertStmt;
const isPgDeleteStmt = (obj) => !!obj.DeleteStmt;
exports.isPgDeleteStmt = isPgDeleteStmt;
const isPgUpdateStmt = (obj) => !!obj.UpdateStmt;
exports.isPgUpdateStmt = isPgUpdateStmt;
const isPgSelectStmt = (obj) => !!obj.SelectStmt;
exports.isPgSelectStmt = isPgSelectStmt;
const isPgSetOperationStmt = (obj) => !!obj.SetOperationStmt;
exports.isPgSetOperationStmt = isPgSetOperationStmt;
const isPgCreateSchemaStmt = (obj) => !!obj.CreateSchemaStmt;
exports.isPgCreateSchemaStmt = isPgCreateSchemaStmt;
const isPgAlterTableStmt = (obj) => !!obj.AlterTableStmt;
exports.isPgAlterTableStmt = isPgAlterTableStmt;
const isPgReplicaIdentityStmt = (obj) => !!obj.ReplicaIdentityStmt;
exports.isPgReplicaIdentityStmt = isPgReplicaIdentityStmt;
const isPgAlterTableCmd = (obj) => !!obj.AlterTableCmd;
exports.isPgAlterTableCmd = isPgAlterTableCmd;
const isPgAlterCollationStmt = (obj) => !!obj.AlterCollationStmt;
exports.isPgAlterCollationStmt = isPgAlterCollationStmt;
const isPgAlterDomainStmt = (obj) => !!obj.AlterDomainStmt;
exports.isPgAlterDomainStmt = isPgAlterDomainStmt;
const isPgGrantStmt = (obj) => !!obj.GrantStmt;
exports.isPgGrantStmt = isPgGrantStmt;
const isPgObjectWithArgs = (obj) => !!obj.ObjectWithArgs;
exports.isPgObjectWithArgs = isPgObjectWithArgs;
const isPgAccessPriv = (obj) => !!obj.AccessPriv;
exports.isPgAccessPriv = isPgAccessPriv;
const isPgGrantRoleStmt = (obj) => !!obj.GrantRoleStmt;
exports.isPgGrantRoleStmt = isPgGrantRoleStmt;
const isPgAlterDefaultPrivilegesStmt = (obj) => !!obj.AlterDefaultPrivilegesStmt;
exports.isPgAlterDefaultPrivilegesStmt = isPgAlterDefaultPrivilegesStmt;
const isPgCopyStmt = (obj) => !!obj.CopyStmt;
exports.isPgCopyStmt = isPgCopyStmt;
const isPgVariableSetStmt = (obj) => !!obj.VariableSetStmt;
exports.isPgVariableSetStmt = isPgVariableSetStmt;
const isPgVariableShowStmt = (obj) => !!obj.VariableShowStmt;
exports.isPgVariableShowStmt = isPgVariableShowStmt;
const isPgCreateStmt = (obj) => !!obj.CreateStmt;
exports.isPgCreateStmt = isPgCreateStmt;
const isPgConstraint = (obj) => !!obj.Constraint;
exports.isPgConstraint = isPgConstraint;
const isPgCreateTableSpaceStmt = (obj) => !!obj.CreateTableSpaceStmt;
exports.isPgCreateTableSpaceStmt = isPgCreateTableSpaceStmt;
const isPgDropTableSpaceStmt = (obj) => !!obj.DropTableSpaceStmt;
exports.isPgDropTableSpaceStmt = isPgDropTableSpaceStmt;
const isPgAlterTableSpaceOptionsStmt = (obj) => !!obj.AlterTableSpaceOptionsStmt;
exports.isPgAlterTableSpaceOptionsStmt = isPgAlterTableSpaceOptionsStmt;
const isPgAlterTableMoveAllStmt = (obj) => !!obj.AlterTableMoveAllStmt;
exports.isPgAlterTableMoveAllStmt = isPgAlterTableMoveAllStmt;
const isPgCreateExtensionStmt = (obj) => !!obj.CreateExtensionStmt;
exports.isPgCreateExtensionStmt = isPgCreateExtensionStmt;
const isPgAlterExtensionStmt = (obj) => !!obj.AlterExtensionStmt;
exports.isPgAlterExtensionStmt = isPgAlterExtensionStmt;
const isPgAlterExtensionContentsStmt = (obj) => !!obj.AlterExtensionContentsStmt;
exports.isPgAlterExtensionContentsStmt = isPgAlterExtensionContentsStmt;
const isPgCreateFdwStmt = (obj) => !!obj.CreateFdwStmt;
exports.isPgCreateFdwStmt = isPgCreateFdwStmt;
const isPgAlterFdwStmt = (obj) => !!obj.AlterFdwStmt;
exports.isPgAlterFdwStmt = isPgAlterFdwStmt;
const isPgCreateForeignServerStmt = (obj) => !!obj.CreateForeignServerStmt;
exports.isPgCreateForeignServerStmt = isPgCreateForeignServerStmt;
const isPgAlterForeignServerStmt = (obj) => !!obj.AlterForeignServerStmt;
exports.isPgAlterForeignServerStmt = isPgAlterForeignServerStmt;
const isPgCreateForeignTableStmt = (obj) => !!obj.CreateForeignTableStmt;
exports.isPgCreateForeignTableStmt = isPgCreateForeignTableStmt;
const isPgCreateUserMappingStmt = (obj) => !!obj.CreateUserMappingStmt;
exports.isPgCreateUserMappingStmt = isPgCreateUserMappingStmt;
const isPgAlterUserMappingStmt = (obj) => !!obj.AlterUserMappingStmt;
exports.isPgAlterUserMappingStmt = isPgAlterUserMappingStmt;
const isPgDropUserMappingStmt = (obj) => !!obj.DropUserMappingStmt;
exports.isPgDropUserMappingStmt = isPgDropUserMappingStmt;
const isPgImportForeignSchemaStmt = (obj) => !!obj.ImportForeignSchemaStmt;
exports.isPgImportForeignSchemaStmt = isPgImportForeignSchemaStmt;
const isPgCreatePolicyStmt = (obj) => !!obj.CreatePolicyStmt;
exports.isPgCreatePolicyStmt = isPgCreatePolicyStmt;
const isPgAlterPolicyStmt = (obj) => !!obj.AlterPolicyStmt;
exports.isPgAlterPolicyStmt = isPgAlterPolicyStmt;
const isPgCreateAmStmt = (obj) => !!obj.CreateAmStmt;
exports.isPgCreateAmStmt = isPgCreateAmStmt;
const isPgCreateTrigStmt = (obj) => !!obj.CreateTrigStmt;
exports.isPgCreateTrigStmt = isPgCreateTrigStmt;
const isPgCreateEventTrigStmt = (obj) => !!obj.CreateEventTrigStmt;
exports.isPgCreateEventTrigStmt = isPgCreateEventTrigStmt;
const isPgAlterEventTrigStmt = (obj) => !!obj.AlterEventTrigStmt;
exports.isPgAlterEventTrigStmt = isPgAlterEventTrigStmt;
const isPgCreatePLangStmt = (obj) => !!obj.CreatePLangStmt;
exports.isPgCreatePLangStmt = isPgCreatePLangStmt;
const isPgCreateRoleStmt = (obj) => !!obj.CreateRoleStmt;
exports.isPgCreateRoleStmt = isPgCreateRoleStmt;
const isPgAlterRoleStmt = (obj) => !!obj.AlterRoleStmt;
exports.isPgAlterRoleStmt = isPgAlterRoleStmt;
const isPgAlterRoleSetStmt = (obj) => !!obj.AlterRoleSetStmt;
exports.isPgAlterRoleSetStmt = isPgAlterRoleSetStmt;
const isPgDropRoleStmt = (obj) => !!obj.DropRoleStmt;
exports.isPgDropRoleStmt = isPgDropRoleStmt;
const isPgCreateSeqStmt = (obj) => !!obj.CreateSeqStmt;
exports.isPgCreateSeqStmt = isPgCreateSeqStmt;
const isPgAlterSeqStmt = (obj) => !!obj.AlterSeqStmt;
exports.isPgAlterSeqStmt = isPgAlterSeqStmt;
const isPgDefineStmt = (obj) => !!obj.DefineStmt;
exports.isPgDefineStmt = isPgDefineStmt;
const isPgCreateDomainStmt = (obj) => !!obj.CreateDomainStmt;
exports.isPgCreateDomainStmt = isPgCreateDomainStmt;
const isPgCreateOpClassStmt = (obj) => !!obj.CreateOpClassStmt;
exports.isPgCreateOpClassStmt = isPgCreateOpClassStmt;
const isPgCreateOpClassItem = (obj) => !!obj.CreateOpClassItem;
exports.isPgCreateOpClassItem = isPgCreateOpClassItem;
const isPgCreateOpFamilyStmt = (obj) => !!obj.CreateOpFamilyStmt;
exports.isPgCreateOpFamilyStmt = isPgCreateOpFamilyStmt;
const isPgAlterOpFamilyStmt = (obj) => !!obj.AlterOpFamilyStmt;
exports.isPgAlterOpFamilyStmt = isPgAlterOpFamilyStmt;
const isPgDropStmt = (obj) => !!obj.DropStmt;
exports.isPgDropStmt = isPgDropStmt;
const isPgTruncateStmt = (obj) => !!obj.TruncateStmt;
exports.isPgTruncateStmt = isPgTruncateStmt;
const isPgCommentStmt = (obj) => !!obj.CommentStmt;
exports.isPgCommentStmt = isPgCommentStmt;
const isPgSecLabelStmt = (obj) => !!obj.SecLabelStmt;
exports.isPgSecLabelStmt = isPgSecLabelStmt;
const isPgDeclareCursorStmt = (obj) => !!obj.DeclareCursorStmt;
exports.isPgDeclareCursorStmt = isPgDeclareCursorStmt;
const isPgClosePortalStmt = (obj) => !!obj.ClosePortalStmt;
exports.isPgClosePortalStmt = isPgClosePortalStmt;
const isPgFetchStmt = (obj) => !!obj.FetchStmt;
exports.isPgFetchStmt = isPgFetchStmt;
const isPgIndexStmt = (obj) => !!obj.IndexStmt;
exports.isPgIndexStmt = isPgIndexStmt;
const isPgCreateStatsStmt = (obj) => !!obj.CreateStatsStmt;
exports.isPgCreateStatsStmt = isPgCreateStatsStmt;
const isPgCreateFunctionStmt = (obj) => !!obj.CreateFunctionStmt;
exports.isPgCreateFunctionStmt = isPgCreateFunctionStmt;
const isPgFunctionParameter = (obj) => !!obj.FunctionParameter;
exports.isPgFunctionParameter = isPgFunctionParameter;
const isPgAlterFunctionStmt = (obj) => !!obj.AlterFunctionStmt;
exports.isPgAlterFunctionStmt = isPgAlterFunctionStmt;
const isPgDoStmt = (obj) => !!obj.DoStmt;
exports.isPgDoStmt = isPgDoStmt;
const isPgInlineCodeBlock = (obj) => !!obj.InlineCodeBlock;
exports.isPgInlineCodeBlock = isPgInlineCodeBlock;
const isPgRenameStmt = (obj) => !!obj.RenameStmt;
exports.isPgRenameStmt = isPgRenameStmt;
const isPgAlterObjectDependsStmt = (obj) => !!obj.AlterObjectDependsStmt;
exports.isPgAlterObjectDependsStmt = isPgAlterObjectDependsStmt;
const isPgAlterObjectSchemaStmt = (obj) => !!obj.AlterObjectSchemaStmt;
exports.isPgAlterObjectSchemaStmt = isPgAlterObjectSchemaStmt;
const isPgAlterOwnerStmt = (obj) => !!obj.AlterOwnerStmt;
exports.isPgAlterOwnerStmt = isPgAlterOwnerStmt;
const isPgAlterOperatorStmt = (obj) => !!obj.AlterOperatorStmt;
exports.isPgAlterOperatorStmt = isPgAlterOperatorStmt;
const isPgRuleStmt = (obj) => !!obj.RuleStmt;
exports.isPgRuleStmt = isPgRuleStmt;
const isPgNotifyStmt = (obj) => !!obj.NotifyStmt;
exports.isPgNotifyStmt = isPgNotifyStmt;
const isPgListenStmt = (obj) => !!obj.ListenStmt;
exports.isPgListenStmt = isPgListenStmt;
const isPgUnlistenStmt = (obj) => !!obj.UnlistenStmt;
exports.isPgUnlistenStmt = isPgUnlistenStmt;
const isPgTransactionStmt = (obj) => !!obj.TransactionStmt;
exports.isPgTransactionStmt = isPgTransactionStmt;
const isPgCompositeTypeStmt = (obj) => !!obj.CompositeTypeStmt;
exports.isPgCompositeTypeStmt = isPgCompositeTypeStmt;
const isPgCreateEnumStmt = (obj) => !!obj.CreateEnumStmt;
exports.isPgCreateEnumStmt = isPgCreateEnumStmt;
const isPgCreateRangeStmt = (obj) => !!obj.CreateRangeStmt;
exports.isPgCreateRangeStmt = isPgCreateRangeStmt;
const isPgAlterEnumStmt = (obj) => !!obj.AlterEnumStmt;
exports.isPgAlterEnumStmt = isPgAlterEnumStmt;
const isPgViewStmt = (obj) => !!obj.ViewStmt;
exports.isPgViewStmt = isPgViewStmt;
const isPgLoadStmt = (obj) => !!obj.LoadStmt;
exports.isPgLoadStmt = isPgLoadStmt;
const isPgCreatedbStmt = (obj) => !!obj.CreatedbStmt;
exports.isPgCreatedbStmt = isPgCreatedbStmt;
const isPgAlterDatabaseStmt = (obj) => !!obj.AlterDatabaseStmt;
exports.isPgAlterDatabaseStmt = isPgAlterDatabaseStmt;
const isPgAlterDatabaseSetStmt = (obj) => !!obj.AlterDatabaseSetStmt;
exports.isPgAlterDatabaseSetStmt = isPgAlterDatabaseSetStmt;
const isPgDropdbStmt = (obj) => !!obj.DropdbStmt;
exports.isPgDropdbStmt = isPgDropdbStmt;
const isPgAlterSystemStmt = (obj) => !!obj.AlterSystemStmt;
exports.isPgAlterSystemStmt = isPgAlterSystemStmt;
const isPgClusterStmt = (obj) => !!obj.ClusterStmt;
exports.isPgClusterStmt = isPgClusterStmt;
const isPgVacuumStmt = (obj) => !!obj.VacuumStmt;
exports.isPgVacuumStmt = isPgVacuumStmt;
const isPgExplainStmt = (obj) => !!obj.ExplainStmt;
exports.isPgExplainStmt = isPgExplainStmt;
const isPgCreateTableAsStmt = (obj) => !!obj.CreateTableAsStmt;
exports.isPgCreateTableAsStmt = isPgCreateTableAsStmt;
const isPgRefreshMatViewStmt = (obj) => !!obj.RefreshMatViewStmt;
exports.isPgRefreshMatViewStmt = isPgRefreshMatViewStmt;
const isPgCheckPointStmt = (obj) => !!obj.CheckPointStmt;
exports.isPgCheckPointStmt = isPgCheckPointStmt;
const isPgDiscardStmt = (obj) => !!obj.DiscardStmt;
exports.isPgDiscardStmt = isPgDiscardStmt;
const isPgLockStmt = (obj) => !!obj.LockStmt;
exports.isPgLockStmt = isPgLockStmt;
const isPgConstraintsSetStmt = (obj) => !!obj.ConstraintsSetStmt;
exports.isPgConstraintsSetStmt = isPgConstraintsSetStmt;
const isPgReindexStmt = (obj) => !!obj.ReindexStmt;
exports.isPgReindexStmt = isPgReindexStmt;
const isPgCreateConversionStmt = (obj) => !!obj.CreateConversionStmt;
exports.isPgCreateConversionStmt = isPgCreateConversionStmt;
const isPgCreateCastStmt = (obj) => !!obj.CreateCastStmt;
exports.isPgCreateCastStmt = isPgCreateCastStmt;
const isPgCreateTransformStmt = (obj) => !!obj.CreateTransformStmt;
exports.isPgCreateTransformStmt = isPgCreateTransformStmt;
const isPgPrepareStmt = (obj) => !!obj.PrepareStmt;
exports.isPgPrepareStmt = isPgPrepareStmt;
const isPgExecuteStmt = (obj) => !!obj.ExecuteStmt;
exports.isPgExecuteStmt = isPgExecuteStmt;
const isPgDeallocateStmt = (obj) => !!obj.DeallocateStmt;
exports.isPgDeallocateStmt = isPgDeallocateStmt;
const isPgDropOwnedStmt = (obj) => !!obj.DropOwnedStmt;
exports.isPgDropOwnedStmt = isPgDropOwnedStmt;
const isPgReassignOwnedStmt = (obj) => !!obj.ReassignOwnedStmt;
exports.isPgReassignOwnedStmt = isPgReassignOwnedStmt;
const isPgAlterTSDictionaryStmt = (obj) => !!obj.AlterTSDictionaryStmt;
exports.isPgAlterTSDictionaryStmt = isPgAlterTSDictionaryStmt;
const isPgAlterTSConfigurationStmt = (obj) => !!obj.AlterTSConfigurationStmt;
exports.isPgAlterTSConfigurationStmt = isPgAlterTSConfigurationStmt;
const isPgCreatePublicationStmt = (obj) => !!obj.CreatePublicationStmt;
exports.isPgCreatePublicationStmt = isPgCreatePublicationStmt;
const isPgAlterPublicationStmt = (obj) => !!obj.AlterPublicationStmt;
exports.isPgAlterPublicationStmt = isPgAlterPublicationStmt;
const isPgCreateSubscriptionStmt = (obj) => !!obj.CreateSubscriptionStmt;
exports.isPgCreateSubscriptionStmt = isPgCreateSubscriptionStmt;
const isPgAlterSubscriptionStmt = (obj) => !!obj.AlterSubscriptionStmt;
exports.isPgAlterSubscriptionStmt = isPgAlterSubscriptionStmt;
const isPgDropSubscriptionStmt = (obj) => !!obj.DropSubscriptionStmt;
exports.isPgDropSubscriptionStmt = isPgDropSubscriptionStmt;
//# sourceMappingURL=pg-query-emscripten-type-guards.js.map