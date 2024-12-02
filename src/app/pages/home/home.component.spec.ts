import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD

import { HomeComponent } from './home.component';
=======
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { SideComponent } from '../../layout/side/side.component';
import { RecentComponent } from '../../layout/recent/recent.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Styles
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
>>>>>>> dd05d4e (feat: basic Angular layout)

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

<<<<<<< HEAD
  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [HomeComponent]
    })
    .compileComponents();
    
=======
      declarations: [
        HomeComponent,
        HeaderComponent,
        SideComponent,
        RecentComponent,
        FooterComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
      ]
    }).compileComponents();

>>>>>>> dd05d4e (feat: basic Angular layout)
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
=======
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                HomeComponent,
                HeaderComponent,
                SideComponent,
                RecentComponent,
                FooterComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                MatIconModule,
                MatToolbarModule,
                MatMenuModule,
                MatDialogModule,
                HttpClientModule
            ],
            providers: [
                {provide: MatDialogRef, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: []},
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
>>>>>>> 28b4b93 (feat: added home component)

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
