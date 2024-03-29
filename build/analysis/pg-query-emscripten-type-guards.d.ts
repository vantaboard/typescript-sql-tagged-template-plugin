import { PgNode, PgInteger, PgFloat, PgString, PgBitString, PgNull, PgAlias, PgRangeVar, PgTableFunc, PgIntoClause, PgExpr, PgVar, PgConst, PgParam, PgAggref, PgGroupingFunc, PgWindowFunc, PgArrayRef, PgFuncExpr, PgNamedArgExpr, PgOpExpr, PgScalarArrayOpExpr, PgBoolExpr, PgSubLink, PgSubPlan, PgAlternativeSubPlan, PgFieldSelect, PgFieldStore, PgRelabelType, PgCoerceViaIO, PgArrayCoerceExpr, PgConvertRowtypeExpr, PgCollateExpr, PgCaseExpr, PgCaseWhen, PgCaseTestExpr, PgArrayExpr, PgRowExpr, PgRowCompareExpr, PgCoalesceExpr, PgMinMaxExpr, PgSQLValueFunction, PgXmlExpr, PgNullTest, PgBooleanTest, PgCoerceToDomain, PgCoerceToDomainValue, PgSetToDefault, PgCurrentOfExpr, PgNextValueExpr, PgInferenceElem, PgTargetEntry, PgRangeTblRef, PgJoinExpr, PgFromExpr, PgOnConflictExpr, PgQuery, PgTypeName, PgColumnRef, PgParamRef, PgA_Expr, PgA_Const, PgTypeCast, PgCollateClause, PgRoleSpec, PgFuncCall, PgA_Star, PgA_Indices, PgA_Indirection, PgA_ArrayExpr, PgResTarget, PgMultiAssignRef, PgSortBy, PgWindowDef, PgRangeSubselect, PgRangeFunction, PgRangeTableFunc, PgRangeTableFuncCol, PgRangeTableSample, PgColumnDef, PgTableLikeClause, PgIndexElem, PgDefElem, PgLockingClause, PgXmlSerialize, PgPartitionElem, PgPartitionSpec, PgPartitionBoundSpec, PgPartitionRangeDatum, PgPartitionCmd, PgRangeTblEntry, PgRangeTblFunction, PgTableSampleClause, PgWithCheckOption, PgSortGroupClause, PgGroupingSet, PgWindowClause, PgRowMarkClause, PgWithClause, PgInferClause, PgOnConflictClause, PgCommonTableExpr, PgTriggerTransition, PgRawStmt, PgInsertStmt, PgDeleteStmt, PgUpdateStmt, PgSelectStmt, PgSetOperationStmt, PgCreateSchemaStmt, PgAlterTableStmt, PgReplicaIdentityStmt, PgAlterTableCmd, PgAlterCollationStmt, PgAlterDomainStmt, PgGrantStmt, PgObjectWithArgs, PgAccessPriv, PgGrantRoleStmt, PgAlterDefaultPrivilegesStmt, PgCopyStmt, PgVariableSetStmt, PgVariableShowStmt, PgCreateStmt, PgConstraint, PgCreateTableSpaceStmt, PgDropTableSpaceStmt, PgAlterTableSpaceOptionsStmt, PgAlterTableMoveAllStmt, PgCreateExtensionStmt, PgAlterExtensionStmt, PgAlterExtensionContentsStmt, PgCreateFdwStmt, PgAlterFdwStmt, PgCreateForeignServerStmt, PgAlterForeignServerStmt, PgCreateForeignTableStmt, PgCreateUserMappingStmt, PgAlterUserMappingStmt, PgDropUserMappingStmt, PgImportForeignSchemaStmt, PgCreatePolicyStmt, PgAlterPolicyStmt, PgCreateAmStmt, PgCreateTrigStmt, PgCreateEventTrigStmt, PgAlterEventTrigStmt, PgCreatePLangStmt, PgCreateRoleStmt, PgAlterRoleStmt, PgAlterRoleSetStmt, PgDropRoleStmt, PgCreateSeqStmt, PgAlterSeqStmt, PgDefineStmt, PgCreateDomainStmt, PgCreateOpClassStmt, PgCreateOpClassItem, PgCreateOpFamilyStmt, PgAlterOpFamilyStmt, PgDropStmt, PgTruncateStmt, PgCommentStmt, PgSecLabelStmt, PgDeclareCursorStmt, PgClosePortalStmt, PgFetchStmt, PgIndexStmt, PgCreateStatsStmt, PgCreateFunctionStmt, PgFunctionParameter, PgAlterFunctionStmt, PgDoStmt, PgInlineCodeBlock, PgRenameStmt, PgAlterObjectDependsStmt, PgAlterObjectSchemaStmt, PgAlterOwnerStmt, PgAlterOperatorStmt, PgRuleStmt, PgNotifyStmt, PgListenStmt, PgUnlistenStmt, PgTransactionStmt, PgCompositeTypeStmt, PgCreateEnumStmt, PgCreateRangeStmt, PgAlterEnumStmt, PgViewStmt, PgLoadStmt, PgCreatedbStmt, PgAlterDatabaseStmt, PgAlterDatabaseSetStmt, PgDropdbStmt, PgAlterSystemStmt, PgClusterStmt, PgVacuumStmt, PgExplainStmt, PgCreateTableAsStmt, PgRefreshMatViewStmt, PgCheckPointStmt, PgDiscardStmt, PgLockStmt, PgConstraintsSetStmt, PgReindexStmt, PgCreateConversionStmt, PgCreateCastStmt, PgCreateTransformStmt, PgPrepareStmt, PgExecuteStmt, PgDeallocateStmt, PgDropOwnedStmt, PgReassignOwnedStmt, PgAlterTSDictionaryStmt, PgAlterTSConfigurationStmt, PgCreatePublicationStmt, PgAlterPublicationStmt, PgCreateSubscriptionStmt, PgAlterSubscriptionStmt, PgDropSubscriptionStmt } from "pg-query-emscripten";
export declare const isPgNodeArray: (obj: PgNode) => obj is PgNode[];
export declare const isPgInteger: (obj: PgNode) => obj is PgInteger;
export declare const isPgFloat: (obj: PgNode) => obj is PgFloat;
export declare const isPgString: (obj: PgNode) => obj is PgString;
export declare const isPgBitString: (obj: PgNode) => obj is PgBitString;
export declare const isPgNull: (obj: PgNode) => obj is PgNull;
export declare const isPgAlias: (obj: PgNode) => obj is PgAlias;
export declare const isPgRangeVar: (obj: PgNode) => obj is PgRangeVar;
export declare const isPgTableFunc: (obj: PgNode) => obj is PgTableFunc;
export declare const isPgIntoClause: (obj: PgNode) => obj is PgIntoClause;
export declare const isPgExpr: (obj: PgNode) => obj is PgExpr;
export declare const isPgVar: (obj: PgNode) => obj is PgVar;
export declare const isPgConst: (obj: PgNode) => obj is PgConst;
export declare const isPgParam: (obj: PgNode) => obj is PgParam;
export declare const isPgAggref: (obj: PgNode) => obj is PgAggref;
export declare const isPgGroupingFunc: (obj: PgNode) => obj is PgGroupingFunc;
export declare const isPgWindowFunc: (obj: PgNode) => obj is PgWindowFunc;
export declare const isPgArrayRef: (obj: PgNode) => obj is PgArrayRef;
export declare const isPgFuncExpr: (obj: PgNode) => obj is PgFuncExpr;
export declare const isPgNamedArgExpr: (obj: PgNode) => obj is PgNamedArgExpr;
export declare const isPgOpExpr: (obj: PgNode) => obj is PgOpExpr;
export declare const isPgScalarArrayOpExpr: (obj: PgNode) => obj is PgScalarArrayOpExpr;
export declare const isPgBoolExpr: (obj: PgNode) => obj is PgBoolExpr;
export declare const isPgSubLink: (obj: PgNode) => obj is PgSubLink;
export declare const isPgSubPlan: (obj: PgNode) => obj is PgSubPlan;
export declare const isPgAlternativeSubPlan: (obj: PgNode) => obj is PgAlternativeSubPlan;
export declare const isPgFieldSelect: (obj: PgNode) => obj is PgFieldSelect;
export declare const isPgFieldStore: (obj: PgNode) => obj is PgFieldStore;
export declare const isPgRelabelType: (obj: PgNode) => obj is PgRelabelType;
export declare const isPgCoerceViaIO: (obj: PgNode) => obj is PgCoerceViaIO;
export declare const isPgArrayCoerceExpr: (obj: PgNode) => obj is PgArrayCoerceExpr;
export declare const isPgConvertRowtypeExpr: (obj: PgNode) => obj is PgConvertRowtypeExpr;
export declare const isPgCollateExpr: (obj: PgNode) => obj is PgCollateExpr;
export declare const isPgCaseExpr: (obj: PgNode) => obj is PgCaseExpr;
export declare const isPgCaseWhen: (obj: PgNode) => obj is PgCaseWhen;
export declare const isPgCaseTestExpr: (obj: PgNode) => obj is PgCaseTestExpr;
export declare const isPgArrayExpr: (obj: PgNode) => obj is PgArrayExpr;
export declare const isPgRowExpr: (obj: PgNode) => obj is PgRowExpr;
export declare const isPgRowCompareExpr: (obj: PgNode) => obj is PgRowCompareExpr;
export declare const isPgCoalesceExpr: (obj: PgNode) => obj is PgCoalesceExpr;
export declare const isPgMinMaxExpr: (obj: PgNode) => obj is PgMinMaxExpr;
export declare const isPgSQLValueFunction: (obj: PgNode) => obj is PgSQLValueFunction;
export declare const isPgXmlExpr: (obj: PgNode) => obj is PgXmlExpr;
export declare const isPgNullTest: (obj: PgNode) => obj is PgNullTest;
export declare const isPgBooleanTest: (obj: PgNode) => obj is PgBooleanTest;
export declare const isPgCoerceToDomain: (obj: PgNode) => obj is PgCoerceToDomain;
export declare const isPgCoerceToDomainValue: (obj: PgNode) => obj is PgCoerceToDomainValue;
export declare const isPgSetToDefault: (obj: PgNode) => obj is PgSetToDefault;
export declare const isPgCurrentOfExpr: (obj: PgNode) => obj is PgCurrentOfExpr;
export declare const isPgNextValueExpr: (obj: PgNode) => obj is PgNextValueExpr;
export declare const isPgInferenceElem: (obj: PgNode) => obj is PgInferenceElem;
export declare const isPgTargetEntry: (obj: PgNode) => obj is PgTargetEntry;
export declare const isPgRangeTblRef: (obj: PgNode) => obj is PgRangeTblRef;
export declare const isPgJoinExpr: (obj: PgNode) => obj is PgJoinExpr;
export declare const isPgFromExpr: (obj: PgNode) => obj is PgFromExpr;
export declare const isPgOnConflictExpr: (obj: PgNode) => obj is PgOnConflictExpr;
export declare const isPgQuery: (obj: PgNode) => obj is PgQuery;
export declare const isPgTypeName: (obj: PgNode) => obj is PgTypeName;
export declare const isPgColumnRef: (obj: PgNode) => obj is PgColumnRef;
export declare const isPgParamRef: (obj: PgNode) => obj is PgParamRef;
export declare const isPgA_Expr: (obj: PgNode) => obj is PgA_Expr;
export declare const isPgA_Const: (obj: PgNode) => obj is PgA_Const;
export declare const isPgTypeCast: (obj: PgNode) => obj is PgTypeCast;
export declare const isPgCollateClause: (obj: PgNode) => obj is PgCollateClause;
export declare const isPgRoleSpec: (obj: PgNode) => obj is PgRoleSpec;
export declare const isPgFuncCall: (obj: PgNode) => obj is PgFuncCall;
export declare const isPgA_Star: (obj: PgNode) => obj is PgA_Star;
export declare const isPgA_Indices: (obj: PgNode) => obj is PgA_Indices;
export declare const isPgA_Indirection: (obj: PgNode) => obj is PgA_Indirection;
export declare const isPgA_ArrayExpr: (obj: PgNode) => obj is PgA_ArrayExpr;
export declare const isPgResTarget: (obj: PgNode) => obj is PgResTarget;
export declare const isPgMultiAssignRef: (obj: PgNode) => obj is PgMultiAssignRef;
export declare const isPgSortBy: (obj: PgNode) => obj is PgSortBy;
export declare const isPgWindowDef: (obj: PgNode) => obj is PgWindowDef;
export declare const isPgRangeSubselect: (obj: PgNode) => obj is PgRangeSubselect;
export declare const isPgRangeFunction: (obj: PgNode) => obj is PgRangeFunction;
export declare const isPgRangeTableFunc: (obj: PgNode) => obj is PgRangeTableFunc;
export declare const isPgRangeTableFuncCol: (obj: PgNode) => obj is PgRangeTableFuncCol;
export declare const isPgRangeTableSample: (obj: PgNode) => obj is PgRangeTableSample;
export declare const isPgColumnDef: (obj: PgNode) => obj is PgColumnDef;
export declare const isPgTableLikeClause: (obj: PgNode) => obj is PgTableLikeClause;
export declare const isPgIndexElem: (obj: PgNode) => obj is PgIndexElem;
export declare const isPgDefElem: (obj: PgNode) => obj is PgDefElem;
export declare const isPgLockingClause: (obj: PgNode) => obj is PgLockingClause;
export declare const isPgXmlSerialize: (obj: PgNode) => obj is PgXmlSerialize;
export declare const isPgPartitionElem: (obj: PgNode) => obj is PgPartitionElem;
export declare const isPgPartitionSpec: (obj: PgNode) => obj is PgPartitionSpec;
export declare const isPgPartitionBoundSpec: (obj: PgNode) => obj is PgPartitionBoundSpec;
export declare const isPgPartitionRangeDatum: (obj: PgNode) => obj is PgPartitionRangeDatum;
export declare const isPgPartitionCmd: (obj: PgNode) => obj is PgPartitionCmd;
export declare const isPgRangeTblEntry: (obj: PgNode) => obj is PgRangeTblEntry;
export declare const isPgRangeTblFunction: (obj: PgNode) => obj is PgRangeTblFunction;
export declare const isPgTableSampleClause: (obj: PgNode) => obj is PgTableSampleClause;
export declare const isPgWithCheckOption: (obj: PgNode) => obj is PgWithCheckOption;
export declare const isPgSortGroupClause: (obj: PgNode) => obj is PgSortGroupClause;
export declare const isPgGroupingSet: (obj: PgNode) => obj is PgGroupingSet;
export declare const isPgWindowClause: (obj: PgNode) => obj is PgWindowClause;
export declare const isPgRowMarkClause: (obj: PgNode) => obj is PgRowMarkClause;
export declare const isPgWithClause: (obj: PgNode) => obj is PgWithClause;
export declare const isPgInferClause: (obj: PgNode) => obj is PgInferClause;
export declare const isPgOnConflictClause: (obj: PgNode) => obj is PgOnConflictClause;
export declare const isPgCommonTableExpr: (obj: PgNode) => obj is PgCommonTableExpr;
export declare const isPgTriggerTransition: (obj: PgNode) => obj is PgTriggerTransition;
export declare const isPgRawStmt: (obj: PgNode) => obj is PgRawStmt;
export declare const isPgInsertStmt: (obj: PgNode) => obj is PgInsertStmt;
export declare const isPgDeleteStmt: (obj: PgNode) => obj is PgDeleteStmt;
export declare const isPgUpdateStmt: (obj: PgNode) => obj is PgUpdateStmt;
export declare const isPgSelectStmt: (obj: PgNode) => obj is PgSelectStmt;
export declare const isPgSetOperationStmt: (obj: PgNode) => obj is PgSetOperationStmt;
export declare const isPgCreateSchemaStmt: (obj: PgNode) => obj is PgCreateSchemaStmt;
export declare const isPgAlterTableStmt: (obj: PgNode) => obj is PgAlterTableStmt;
export declare const isPgReplicaIdentityStmt: (obj: PgNode) => obj is PgReplicaIdentityStmt;
export declare const isPgAlterTableCmd: (obj: PgNode) => obj is PgAlterTableCmd;
export declare const isPgAlterCollationStmt: (obj: PgNode) => obj is PgAlterCollationStmt;
export declare const isPgAlterDomainStmt: (obj: PgNode) => obj is PgAlterDomainStmt;
export declare const isPgGrantStmt: (obj: PgNode) => obj is PgGrantStmt;
export declare const isPgObjectWithArgs: (obj: PgNode) => obj is PgObjectWithArgs;
export declare const isPgAccessPriv: (obj: PgNode) => obj is PgAccessPriv;
export declare const isPgGrantRoleStmt: (obj: PgNode) => obj is PgGrantRoleStmt;
export declare const isPgAlterDefaultPrivilegesStmt: (obj: PgNode) => obj is PgAlterDefaultPrivilegesStmt;
export declare const isPgCopyStmt: (obj: PgNode) => obj is PgCopyStmt;
export declare const isPgVariableSetStmt: (obj: PgNode) => obj is PgVariableSetStmt;
export declare const isPgVariableShowStmt: (obj: PgNode) => obj is PgVariableShowStmt;
export declare const isPgCreateStmt: (obj: PgNode) => obj is PgCreateStmt;
export declare const isPgConstraint: (obj: PgNode) => obj is PgConstraint;
export declare const isPgCreateTableSpaceStmt: (obj: PgNode) => obj is PgCreateTableSpaceStmt;
export declare const isPgDropTableSpaceStmt: (obj: PgNode) => obj is PgDropTableSpaceStmt;
export declare const isPgAlterTableSpaceOptionsStmt: (obj: PgNode) => obj is PgAlterTableSpaceOptionsStmt;
export declare const isPgAlterTableMoveAllStmt: (obj: PgNode) => obj is PgAlterTableMoveAllStmt;
export declare const isPgCreateExtensionStmt: (obj: PgNode) => obj is PgCreateExtensionStmt;
export declare const isPgAlterExtensionStmt: (obj: PgNode) => obj is PgAlterExtensionStmt;
export declare const isPgAlterExtensionContentsStmt: (obj: PgNode) => obj is PgAlterExtensionContentsStmt;
export declare const isPgCreateFdwStmt: (obj: PgNode) => obj is PgCreateFdwStmt;
export declare const isPgAlterFdwStmt: (obj: PgNode) => obj is PgAlterFdwStmt;
export declare const isPgCreateForeignServerStmt: (obj: PgNode) => obj is PgCreateForeignServerStmt;
export declare const isPgAlterForeignServerStmt: (obj: PgNode) => obj is PgAlterForeignServerStmt;
export declare const isPgCreateForeignTableStmt: (obj: PgNode) => obj is PgCreateForeignTableStmt;
export declare const isPgCreateUserMappingStmt: (obj: PgNode) => obj is PgCreateUserMappingStmt;
export declare const isPgAlterUserMappingStmt: (obj: PgNode) => obj is PgAlterUserMappingStmt;
export declare const isPgDropUserMappingStmt: (obj: PgNode) => obj is PgDropUserMappingStmt;
export declare const isPgImportForeignSchemaStmt: (obj: PgNode) => obj is PgImportForeignSchemaStmt;
export declare const isPgCreatePolicyStmt: (obj: PgNode) => obj is PgCreatePolicyStmt;
export declare const isPgAlterPolicyStmt: (obj: PgNode) => obj is PgAlterPolicyStmt;
export declare const isPgCreateAmStmt: (obj: PgNode) => obj is PgCreateAmStmt;
export declare const isPgCreateTrigStmt: (obj: PgNode) => obj is PgCreateTrigStmt;
export declare const isPgCreateEventTrigStmt: (obj: PgNode) => obj is PgCreateEventTrigStmt;
export declare const isPgAlterEventTrigStmt: (obj: PgNode) => obj is PgAlterEventTrigStmt;
export declare const isPgCreatePLangStmt: (obj: PgNode) => obj is PgCreatePLangStmt;
export declare const isPgCreateRoleStmt: (obj: PgNode) => obj is PgCreateRoleStmt;
export declare const isPgAlterRoleStmt: (obj: PgNode) => obj is PgAlterRoleStmt;
export declare const isPgAlterRoleSetStmt: (obj: PgNode) => obj is PgAlterRoleSetStmt;
export declare const isPgDropRoleStmt: (obj: PgNode) => obj is PgDropRoleStmt;
export declare const isPgCreateSeqStmt: (obj: PgNode) => obj is PgCreateSeqStmt;
export declare const isPgAlterSeqStmt: (obj: PgNode) => obj is PgAlterSeqStmt;
export declare const isPgDefineStmt: (obj: PgNode) => obj is PgDefineStmt;
export declare const isPgCreateDomainStmt: (obj: PgNode) => obj is PgCreateDomainStmt;
export declare const isPgCreateOpClassStmt: (obj: PgNode) => obj is PgCreateOpClassStmt;
export declare const isPgCreateOpClassItem: (obj: PgNode) => obj is PgCreateOpClassItem;
export declare const isPgCreateOpFamilyStmt: (obj: PgNode) => obj is PgCreateOpFamilyStmt;
export declare const isPgAlterOpFamilyStmt: (obj: PgNode) => obj is PgAlterOpFamilyStmt;
export declare const isPgDropStmt: (obj: PgNode) => obj is PgDropStmt;
export declare const isPgTruncateStmt: (obj: PgNode) => obj is PgTruncateStmt;
export declare const isPgCommentStmt: (obj: PgNode) => obj is PgCommentStmt;
export declare const isPgSecLabelStmt: (obj: PgNode) => obj is PgSecLabelStmt;
export declare const isPgDeclareCursorStmt: (obj: PgNode) => obj is PgDeclareCursorStmt;
export declare const isPgClosePortalStmt: (obj: PgNode) => obj is PgClosePortalStmt;
export declare const isPgFetchStmt: (obj: PgNode) => obj is PgFetchStmt;
export declare const isPgIndexStmt: (obj: PgNode) => obj is PgIndexStmt;
export declare const isPgCreateStatsStmt: (obj: PgNode) => obj is PgCreateStatsStmt;
export declare const isPgCreateFunctionStmt: (obj: PgNode) => obj is PgCreateFunctionStmt;
export declare const isPgFunctionParameter: (obj: PgNode) => obj is PgFunctionParameter;
export declare const isPgAlterFunctionStmt: (obj: PgNode) => obj is PgAlterFunctionStmt;
export declare const isPgDoStmt: (obj: PgNode) => obj is PgDoStmt;
export declare const isPgInlineCodeBlock: (obj: PgNode) => obj is PgInlineCodeBlock;
export declare const isPgRenameStmt: (obj: PgNode) => obj is PgRenameStmt;
export declare const isPgAlterObjectDependsStmt: (obj: PgNode) => obj is PgAlterObjectDependsStmt;
export declare const isPgAlterObjectSchemaStmt: (obj: PgNode) => obj is PgAlterObjectSchemaStmt;
export declare const isPgAlterOwnerStmt: (obj: PgNode) => obj is PgAlterOwnerStmt;
export declare const isPgAlterOperatorStmt: (obj: PgNode) => obj is PgAlterOperatorStmt;
export declare const isPgRuleStmt: (obj: PgNode) => obj is PgRuleStmt;
export declare const isPgNotifyStmt: (obj: PgNode) => obj is PgNotifyStmt;
export declare const isPgListenStmt: (obj: PgNode) => obj is PgListenStmt;
export declare const isPgUnlistenStmt: (obj: PgNode) => obj is PgUnlistenStmt;
export declare const isPgTransactionStmt: (obj: PgNode) => obj is PgTransactionStmt;
export declare const isPgCompositeTypeStmt: (obj: PgNode) => obj is PgCompositeTypeStmt;
export declare const isPgCreateEnumStmt: (obj: PgNode) => obj is PgCreateEnumStmt;
export declare const isPgCreateRangeStmt: (obj: PgNode) => obj is PgCreateRangeStmt;
export declare const isPgAlterEnumStmt: (obj: PgNode) => obj is PgAlterEnumStmt;
export declare const isPgViewStmt: (obj: PgNode) => obj is PgViewStmt;
export declare const isPgLoadStmt: (obj: PgNode) => obj is PgLoadStmt;
export declare const isPgCreatedbStmt: (obj: PgNode) => obj is PgCreatedbStmt;
export declare const isPgAlterDatabaseStmt: (obj: PgNode) => obj is PgAlterDatabaseStmt;
export declare const isPgAlterDatabaseSetStmt: (obj: PgNode) => obj is PgAlterDatabaseSetStmt;
export declare const isPgDropdbStmt: (obj: PgNode) => obj is PgDropdbStmt;
export declare const isPgAlterSystemStmt: (obj: PgNode) => obj is PgAlterSystemStmt;
export declare const isPgClusterStmt: (obj: PgNode) => obj is PgClusterStmt;
export declare const isPgVacuumStmt: (obj: PgNode) => obj is PgVacuumStmt;
export declare const isPgExplainStmt: (obj: PgNode) => obj is PgExplainStmt;
export declare const isPgCreateTableAsStmt: (obj: PgNode) => obj is PgCreateTableAsStmt;
export declare const isPgRefreshMatViewStmt: (obj: PgNode) => obj is PgRefreshMatViewStmt;
export declare const isPgCheckPointStmt: (obj: PgNode) => obj is PgCheckPointStmt;
export declare const isPgDiscardStmt: (obj: PgNode) => obj is PgDiscardStmt;
export declare const isPgLockStmt: (obj: PgNode) => obj is PgLockStmt;
export declare const isPgConstraintsSetStmt: (obj: PgNode) => obj is PgConstraintsSetStmt;
export declare const isPgReindexStmt: (obj: PgNode) => obj is PgReindexStmt;
export declare const isPgCreateConversionStmt: (obj: PgNode) => obj is PgCreateConversionStmt;
export declare const isPgCreateCastStmt: (obj: PgNode) => obj is PgCreateCastStmt;
export declare const isPgCreateTransformStmt: (obj: PgNode) => obj is PgCreateTransformStmt;
export declare const isPgPrepareStmt: (obj: PgNode) => obj is PgPrepareStmt;
export declare const isPgExecuteStmt: (obj: PgNode) => obj is PgExecuteStmt;
export declare const isPgDeallocateStmt: (obj: PgNode) => obj is PgDeallocateStmt;
export declare const isPgDropOwnedStmt: (obj: PgNode) => obj is PgDropOwnedStmt;
export declare const isPgReassignOwnedStmt: (obj: PgNode) => obj is PgReassignOwnedStmt;
export declare const isPgAlterTSDictionaryStmt: (obj: PgNode) => obj is PgAlterTSDictionaryStmt;
export declare const isPgAlterTSConfigurationStmt: (obj: PgNode) => obj is PgAlterTSConfigurationStmt;
export declare const isPgCreatePublicationStmt: (obj: PgNode) => obj is PgCreatePublicationStmt;
export declare const isPgAlterPublicationStmt: (obj: PgNode) => obj is PgAlterPublicationStmt;
export declare const isPgCreateSubscriptionStmt: (obj: PgNode) => obj is PgCreateSubscriptionStmt;
export declare const isPgAlterSubscriptionStmt: (obj: PgNode) => obj is PgAlterSubscriptionStmt;
export declare const isPgDropSubscriptionStmt: (obj: PgNode) => obj is PgDropSubscriptionStmt;
