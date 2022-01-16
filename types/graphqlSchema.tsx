import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
};


/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * 一般投稿テーブル
 *
 *
 * columns and relationships of "posts"
 *
 */
export type Posts = {
  __typename?: 'posts';
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate';
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields';
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};


/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint */
  PostsPkey = 'posts_pkey'
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** on conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
};


export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Query_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "posts" */
  posts: Array<Posts>;
  /** fetch aggregated fields from the table: "posts" */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
};


export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};


export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['Int'];
};

export type GetPostQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'posts', content: string, title: string, id: number }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  posts: ResolverTypeWrapper<Posts>;
  posts_aggregate: ResolverTypeWrapper<Posts_Aggregate>;
  posts_aggregate_fields: ResolverTypeWrapper<Posts_Aggregate_Fields>;
  posts_avg_fields: ResolverTypeWrapper<Posts_Avg_Fields>;
  posts_bool_exp: Posts_Bool_Exp;
  posts_constraint: Posts_Constraint;
  posts_inc_input: Posts_Inc_Input;
  posts_insert_input: Posts_Insert_Input;
  posts_max_fields: ResolverTypeWrapper<Posts_Max_Fields>;
  posts_min_fields: ResolverTypeWrapper<Posts_Min_Fields>;
  posts_mutation_response: ResolverTypeWrapper<Posts_Mutation_Response>;
  posts_on_conflict: Posts_On_Conflict;
  posts_order_by: Posts_Order_By;
  posts_pk_columns_input: Posts_Pk_Columns_Input;
  posts_select_column: Posts_Select_Column;
  posts_set_input: Posts_Set_Input;
  posts_stddev_fields: ResolverTypeWrapper<Posts_Stddev_Fields>;
  posts_stddev_pop_fields: ResolverTypeWrapper<Posts_Stddev_Pop_Fields>;
  posts_stddev_samp_fields: ResolverTypeWrapper<Posts_Stddev_Samp_Fields>;
  posts_sum_fields: ResolverTypeWrapper<Posts_Sum_Fields>;
  posts_update_column: Posts_Update_Column;
  posts_var_pop_fields: ResolverTypeWrapper<Posts_Var_Pop_Fields>;
  posts_var_samp_fields: ResolverTypeWrapper<Posts_Var_Samp_Fields>;
  posts_variance_fields: ResolverTypeWrapper<Posts_Variance_Fields>;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  mutation_root: {};
  posts: Posts;
  posts_aggregate: Posts_Aggregate;
  posts_aggregate_fields: Posts_Aggregate_Fields;
  posts_avg_fields: Posts_Avg_Fields;
  posts_bool_exp: Posts_Bool_Exp;
  posts_inc_input: Posts_Inc_Input;
  posts_insert_input: Posts_Insert_Input;
  posts_max_fields: Posts_Max_Fields;
  posts_min_fields: Posts_Min_Fields;
  posts_mutation_response: Posts_Mutation_Response;
  posts_on_conflict: Posts_On_Conflict;
  posts_order_by: Posts_Order_By;
  posts_pk_columns_input: Posts_Pk_Columns_Input;
  posts_set_input: Posts_Set_Input;
  posts_stddev_fields: Posts_Stddev_Fields;
  posts_stddev_pop_fields: Posts_Stddev_Pop_Fields;
  posts_stddev_samp_fields: Posts_Stddev_Samp_Fields;
  posts_sum_fields: Posts_Sum_Fields;
  posts_var_pop_fields: Posts_Var_Pop_Fields;
  posts_var_samp_fields: Posts_Var_Samp_Fields;
  posts_variance_fields: Posts_Variance_Fields;
  query_root: {};
  subscription_root: {};
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_posts?: Resolver<Maybe<ResolversTypes['posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_PostsArgs, 'where'>>;
  delete_posts_by_pk?: Resolver<Maybe<ResolversTypes['posts']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Posts_By_PkArgs, 'id'>>;
  insert_posts?: Resolver<Maybe<ResolversTypes['posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_PostsArgs, 'objects'>>;
  insert_posts_one?: Resolver<Maybe<ResolversTypes['posts']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Posts_OneArgs, 'object'>>;
  update_posts?: Resolver<Maybe<ResolversTypes['posts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_PostsArgs, 'where'>>;
  update_posts_by_pk?: Resolver<Maybe<ResolversTypes['posts']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Posts_By_PkArgs, 'pk_columns'>>;
};

export type PostsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts'] = ResolversParentTypes['posts']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_aggregate'] = ResolversParentTypes['posts_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['posts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_aggregate_fields'] = ResolversParentTypes['posts_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['posts_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<Posts_Aggregate_FieldsCountArgs, never>>;
  max?: Resolver<Maybe<ResolversTypes['posts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['posts_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['posts_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['posts_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['posts_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['posts_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['posts_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['posts_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['posts_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_avg_fields'] = ResolversParentTypes['posts_avg_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_max_fields'] = ResolversParentTypes['posts_max_fields']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_min_fields'] = ResolversParentTypes['posts_min_fields']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_mutation_response'] = ResolversParentTypes['posts_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['posts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_stddev_fields'] = ResolversParentTypes['posts_stddev_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_stddev_pop_fields'] = ResolversParentTypes['posts_stddev_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_stddev_samp_fields'] = ResolversParentTypes['posts_stddev_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_sum_fields'] = ResolversParentTypes['posts_sum_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_var_pop_fields'] = ResolversParentTypes['posts_var_pop_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_var_samp_fields'] = ResolversParentTypes['posts_var_samp_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Posts_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['posts_variance_fields'] = ResolversParentTypes['posts_variance_fields']> = {
  id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  posts?: Resolver<Array<ResolversTypes['posts']>, ParentType, ContextType, RequireFields<Query_RootPostsArgs, never>>;
  posts_aggregate?: Resolver<ResolversTypes['posts_aggregate'], ParentType, ContextType, RequireFields<Query_RootPosts_AggregateArgs, never>>;
  posts_by_pk?: Resolver<Maybe<ResolversTypes['posts']>, ParentType, ContextType, RequireFields<Query_RootPosts_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  posts?: SubscriptionResolver<Array<ResolversTypes['posts']>, "posts", ParentType, ContextType, RequireFields<Subscription_RootPostsArgs, never>>;
  posts_aggregate?: SubscriptionResolver<ResolversTypes['posts_aggregate'], "posts_aggregate", ParentType, ContextType, RequireFields<Subscription_RootPosts_AggregateArgs, never>>;
  posts_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['posts']>, "posts_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPosts_By_PkArgs, 'id'>>;
};

export type Resolvers<ContextType = any> = {
  mutation_root?: Mutation_RootResolvers<ContextType>;
  posts?: PostsResolvers<ContextType>;
  posts_aggregate?: Posts_AggregateResolvers<ContextType>;
  posts_aggregate_fields?: Posts_Aggregate_FieldsResolvers<ContextType>;
  posts_avg_fields?: Posts_Avg_FieldsResolvers<ContextType>;
  posts_max_fields?: Posts_Max_FieldsResolvers<ContextType>;
  posts_min_fields?: Posts_Min_FieldsResolvers<ContextType>;
  posts_mutation_response?: Posts_Mutation_ResponseResolvers<ContextType>;
  posts_stddev_fields?: Posts_Stddev_FieldsResolvers<ContextType>;
  posts_stddev_pop_fields?: Posts_Stddev_Pop_FieldsResolvers<ContextType>;
  posts_stddev_samp_fields?: Posts_Stddev_Samp_FieldsResolvers<ContextType>;
  posts_sum_fields?: Posts_Sum_FieldsResolvers<ContextType>;
  posts_var_pop_fields?: Posts_Var_Pop_FieldsResolvers<ContextType>;
  posts_var_samp_fields?: Posts_Var_Samp_FieldsResolvers<ContextType>;
  posts_variance_fields?: Posts_Variance_FieldsResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};


export const GetPostDocument = gql`
    query GetPost {
  posts(limit: 10) {
    content
    title
    id
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;