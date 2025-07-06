/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { StatsResponse } from '../models/StatsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Login
     * @param requestBody
     * @returns LoginResponse Token
     * @throws ApiError
     */
    public static postApiLogin(
        requestBody: LoginRequest,
    ): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get stats
     * @returns StatsResponse Stats data and plant types
     * @throws ApiError
     */
    public static getApiStats(): CancelablePromise<StatsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/stats',
        });
    }
}
