/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { FoodInfoDto } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class FoodInfo<
  SecurityDataType = unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags foodInfo
   * @name CreateFoodInfo
   * @request POST:/foodInfo
   * @secure
   */
  createFoodInfo = (data: FoodInfoDto, params: RequestParams = {}) =>
    this.request<FoodInfoDto, any>({
      path: `/foodInfo`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
