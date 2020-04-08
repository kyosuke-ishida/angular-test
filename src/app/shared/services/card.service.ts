import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CardService {

    // apiのURL
    baseUrl = 'https://ispec-test.microcms.io/api/v1/photo';

    // リクエストヘッダーに情報を追加
    private httpOptions: any = {
        headers: new HttpHeaders({
            'X-API-KEY': 'b279aadc-834e-4977-80e2-e7ba2c825bb7',
        })
    };

    // Httpサービスをインスタンス化
    constructor(private http: HttpClient) {}

    // 投稿を取得
    requestGet(): Observable<any> {
        return this.http.get<Card[]>(this.baseUrl, this.httpOptions)
    }
}
