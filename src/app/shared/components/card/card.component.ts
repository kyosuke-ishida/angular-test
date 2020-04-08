// 一覧に表示するカードコンポーネント
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service'

@Component({
    selector: 'card',
    providers: [ CardService ],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

    
    cards = [];
    // CardServiceをインスタンス化
    constructor(private cardservice: CardService) {}

    ngOnInit(){       
    // コンポーネント初期化時にCardService経由で投稿情報を取得
        this.cardservice.requestGet()
        .subscribe(
            data => {
                // apiから取得したデータを格納
                this.cards = data.contents;
            },
        error => {
            // エラー時は空にする
            this.cards = [];
        });
    }
}