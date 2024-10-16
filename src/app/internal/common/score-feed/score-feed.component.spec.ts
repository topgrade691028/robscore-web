import { ComponentFixture, TestBed, waitForAsync as  } from "@angular/core/testing";

import { ScoreFeedComponent } from "./score-feed.component";

describe("ActivityFeedComponent", () => {
    let component: ScoreFeedComponent;
    let fixture: ComponentFixture<ScoreFeedComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ScoreFeedComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScoreFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
