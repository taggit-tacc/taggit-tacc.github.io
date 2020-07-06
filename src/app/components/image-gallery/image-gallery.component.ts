import {Component, OnInit, Renderer2} from '@angular/core';
import {FeatureCollection} from 'geojson';
import {GeoDataService} from '../../services/geo-data.service';
import {FeatureAsset, Feature, Project} from '../../models/models';
import {AppEnvironment, environment} from '../../../environments/environment';
import {ProjectsService} from "../../services/projects.service";
import {GroupsService} from "../../services/groups.service";
import { NgxSpinnerService } from 'ngx-spinner';
import {startWith} from 'rxjs/operators';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})

export class ImageGalleryComponent implements OnInit {
  environment: AppEnvironment;
  // features: FeatureCollection;
  // FIXME feature collection giving me an error when trying to access assets
  // features: any;
  tempGroup: Array<Feature>;
  groupList: Array<any>;
  // showGroupBar: boolean;
  showGroup: boolean;
  groupName: string;
  showSidebar: boolean;
  scrolling: boolean = false;
  status: boolean;
  featureList: Array<any> = [];
  featureListScroll: Array<any>;
  scrollSum: number = 15;
  activeGroup: string;
  activeFeature: Feature;
  activeFeatureNum: number;
  featurePath: string;

  constructor(private geoDataService: GeoDataService,
			  private projectsService: ProjectsService,
			  private groupsService: GroupsService,
			  private renderer: Renderer2,
			  private spinner: NgxSpinnerService) { }

  ngOnInit() {
	this.environment = environment;
	// this.activeFeatureNum = 0;
	// FIXME feature collection giving me an error when trying to access assets
	// this.geoDataService.features.subscribe( (fc: FeatureCollection) => {
	this.geoDataService.features.subscribe( (fc: any) => {
	  if (fc) {
		this.featureList = fc.features.filter(feature => {
		  return feature.assets[0].asset_type == "image";
		});


		if (this.scrollSum == 15) {
		  this.featureListScroll = this.featureList.slice(0, this.scrollSum);
		}
	  }
	});

	this.geoDataService.activeFeature.subscribe((next) => {
	  if (next) {
		this.activeFeature = next;
	  }
	});

	this.groupsService.groups.subscribe((next) => {
	  this.groupList = next;
	});

	this.groupsService.activeGroup.subscribe((next) => {
	  this.activeGroup = next;
	});

	this.groupsService.tempGroup.subscribe((next) => {
	  this.tempGroup = next;
	});

	this.groupsService.showGroup.subscribe((next) => {
	  this.showGroup = next;
	});

	this.groupsService.activeFeatureNum.pipe(startWith(0)).subscribe((next) => {
	  this.activeFeatureNum = next;
	});

	this.groupsService.showSidebar.subscribe((next) => {
	  this.showSidebar = next;
	  // this.status = !this.status;
	  if (next) {
		this.status = true;
	  } else {
		this.status = false;
	  }
	});

	this.groupsService.setActiveFeatureNum(0);
  }

  getPath(): string {
	// let featureSource = this.environment.apiUrl + '/assets/' + this.activeFeature.assets[0].path;
	let activeGroupObj = this.groupList.filter(realGroup => realGroup.name === this.activeGroup);
	if (activeGroupObj[0] != undefined) {
	  if (activeGroupObj[0].features[this.activeFeatureNum].assets[0].path == undefined) {
		this.groupsService.setActiveFeatureNum(0);
		// this.groupsService.setActiveFeatureNum(0);
		if (activeGroupObj[0].features[this.activeFeatureNum] == undefined) {
		  this.groupsService.setActiveGroup(this.groupList[0].name);
		}
	  }
	}
	let featureSource = this.environment.apiUrl + '/assets/' + activeGroupObj[0].features[this.activeFeatureNum].assets[0].path;
	this.groupsService.setActiveFeatureId(activeGroupObj[0].features[this.activeFeatureNum].id);
	featureSource = featureSource.replace(/([^:])(\/{2,})/g, '$1/');
	return featureSource;
  }

  appendSum() {
	if (this.featureList.length != 0) {
	  if (this.scrollSum > this.featureList.length) {
		this.scrollSum = this.featureList.length;
	  }
	  if (this.scrollSum == this.featureList.length) {
		this.spinner.hide();
		this.scrolling = false;
		return;
	  }
	}
	this.featureListScroll = this.featureList.slice(0, this.scrollSum);
	setTimeout(() => {
	  this.spinner.hide();
	  this.scrolling = false;
	}, 1300);
  }

  onScroll() {
	if (!this.scrolling) {
	  this.spinner.show();
	  this.scrollSum += 10;
	  this.appendSum();
	  this.scrolling = true;
	}
	// if (this.notscrolly && this.notEmptyPost) {
	//   this.spinner.show();
	//   this.notscrolly = false;
	//   this.loadNextPost();
	// }
	// console.log('scrolled!!');
  }
}
