/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sessionsQuery
// ====================================================

export interface sessionsQuery_sessions_edges_node_user {
  __typename: "User";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
}

export interface sessionsQuery_sessions_edges_node {
  __typename: "Session";
  /**
   * The globally unique, unchanging identifier for this record. Assigned and managed by Gadget.
   */
  id: any;
  user: sessionsQuery_sessions_edges_node_user | null;
}

export interface sessionsQuery_sessions_edges {
  __typename: "SessionEdge";
  /**
   * The item at the end of the edge
   */
  node: sessionsQuery_sessions_edges_node | null;
}

export interface sessionsQuery_sessions {
  __typename: "SessionConnection";
  /**
   * A list of edges.
   */
  edges: (sessionsQuery_sessions_edges | null)[] | null;
}

export interface sessionsQuery {
  sessions: sessionsQuery_sessions | null;
}
