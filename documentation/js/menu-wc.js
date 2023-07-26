'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">be documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' :
                                            'id="xs-controllers-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' :
                                        'id="xs-injectables-links-module-AppModule-3dadff6238c3c1c8b4fa9d8f252143ee1ba7cf3259928edea5059818eb54adb590c77558ffbd27d76292b2b168ac021412a2696964e428bbeba8ddfb097348a1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' :
                                            'id="xs-controllers-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' :
                                        'id="xs-injectables-links-module-AuthModule-0f0d9afbe3e2133bccde0c6a650e72a9a3238a86b5fcbdfbf5deefbb8d882146f79dc134ff4404e8e55f7b64ab70e510bc6ced32e3f0e18dfb35b3669361252a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleOauthStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleOauthStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/cacheOperationsModule.html" data-type="entity-link" >cacheOperationsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-cacheOperationsModule-b7dda9041f2d273b8656c37db4c7880cfd804a6d188a53e6f2cb020ca90ac0003d9f4cfe36e03623d37f051e1cb7300adde36bb626f48aa8eab3402aeee24a34"' : 'data-bs-target="#xs-injectables-links-module-cacheOperationsModule-b7dda9041f2d273b8656c37db4c7880cfd804a6d188a53e6f2cb020ca90ac0003d9f4cfe36e03623d37f051e1cb7300adde36bb626f48aa8eab3402aeee24a34"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-cacheOperationsModule-b7dda9041f2d273b8656c37db4c7880cfd804a6d188a53e6f2cb020ca90ac0003d9f4cfe36e03623d37f051e1cb7300adde36bb626f48aa8eab3402aeee24a34"' :
                                        'id="xs-injectables-links-module-cacheOperationsModule-b7dda9041f2d273b8656c37db4c7880cfd804a6d188a53e6f2cb020ca90ac0003d9f4cfe36e03623d37f051e1cb7300adde36bb626f48aa8eab3402aeee24a34"' }>
                                        <li class="link">
                                            <a href="injectables/cacheOperationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >cacheOperationsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChangeStreamsModule.html" data-type="entity-link" >ChangeStreamsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ChangeStreamsModule-e783c1836b424b64a061bea6b2ad2bc26bfffe7caeb44c08d911ec697f23d57ec9a001ab802181ad43f3551990f729202ce8e6a59b2690baa85b3d7a6a63a278"' : 'data-bs-target="#xs-injectables-links-module-ChangeStreamsModule-e783c1836b424b64a061bea6b2ad2bc26bfffe7caeb44c08d911ec697f23d57ec9a001ab802181ad43f3551990f729202ce8e6a59b2690baa85b3d7a6a63a278"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ChangeStreamsModule-e783c1836b424b64a061bea6b2ad2bc26bfffe7caeb44c08d911ec697f23d57ec9a001ab802181ad43f3551990f729202ce8e6a59b2690baa85b3d7a6a63a278"' :
                                        'id="xs-injectables-links-module-ChangeStreamsModule-e783c1836b424b64a061bea6b2ad2bc26bfffe7caeb44c08d911ec697f23d57ec9a001ab802181ad43f3551990f729202ce8e6a59b2690baa85b3d7a6a63a278"' }>
                                        <li class="link">
                                            <a href="injectables/ChangeStreamsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeStreamsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MessageQueueModule.html" data-type="entity-link" >MessageQueueModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessageQueueModule-916a52345833a41369e3c4caa7fe7ba92eca979e058495395b39e58b48d079e7e10d0929fc92da33e11045c2e0647273b9ac3ad74f8307d92cdd1a3f82588bec"' : 'data-bs-target="#xs-injectables-links-module-MessageQueueModule-916a52345833a41369e3c4caa7fe7ba92eca979e058495395b39e58b48d079e7e10d0929fc92da33e11045c2e0647273b9ac3ad74f8307d92cdd1a3f82588bec"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessageQueueModule-916a52345833a41369e3c4caa7fe7ba92eca979e058495395b39e58b48d079e7e10d0929fc92da33e11045c2e0647273b9ac3ad74f8307d92cdd1a3f82588bec"' :
                                        'id="xs-injectables-links-module-MessageQueueModule-916a52345833a41369e3c4caa7fe7ba92eca979e058495395b39e58b48d079e7e10d0929fc92da33e11045c2e0647273b9ac3ad74f8307d92cdd1a3f82588bec"' }>
                                        <li class="link">
                                            <a href="injectables/MessageQueueService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageQueueService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MessageQueueModule.html" data-type="entity-link" >MessageQueueModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MessageQueueModule-c7c5250fff1a7d657ee99e2be8e0988dcdcddd35192881326d538fbdc90a87974d1c8986d13cbd4192716cfde5fa4c114fedb563c2cc5d45ffd4e3b74e31f10f-1"' : 'data-bs-target="#xs-injectables-links-module-MessageQueueModule-c7c5250fff1a7d657ee99e2be8e0988dcdcddd35192881326d538fbdc90a87974d1c8986d13cbd4192716cfde5fa4c114fedb563c2cc5d45ffd4e3b74e31f10f-1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MessageQueueModule-c7c5250fff1a7d657ee99e2be8e0988dcdcddd35192881326d538fbdc90a87974d1c8986d13cbd4192716cfde5fa4c114fedb563c2cc5d45ffd4e3b74e31f10f-1"' :
                                        'id="xs-injectables-links-module-MessageQueueModule-c7c5250fff1a7d657ee99e2be8e0988dcdcddd35192881326d538fbdc90a87974d1c8986d13cbd4192716cfde5fa4c114fedb563c2cc5d45ffd4e3b74e31f10f-1"' }>
                                        <li class="link">
                                            <a href="injectables/ConsumerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsumerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' : 'data-bs-target="#xs-controllers-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' :
                                            'id="xs-controllers-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' : 'data-bs-target="#xs-injectables-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' :
                                        'id="xs-injectables-links-module-NotificationModule-632bc20dc22d685f2e9ae285df24bd0bab6c227f5bb21086aced9e6a189691a364db4a6f621c2cb1c9078dc0a598c2f41adcf54f73ece335a1f5fef7211b3127"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PhoneConfirmationModule.html" data-type="entity-link" >PhoneConfirmationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' : 'data-bs-target="#xs-controllers-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' :
                                            'id="xs-controllers-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' }>
                                            <li class="link">
                                                <a href="controllers/PhoneConfirmationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneConfirmationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' : 'data-bs-target="#xs-injectables-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' :
                                        'id="xs-injectables-links-module-PhoneConfirmationModule-68778135505b314d521f5f4f5e02c10a155ccc33600996ea40738285e28ff2fadf42d28584896a987b3965e6ec669c75d6dc9f73eed020c6cc1884c15af3a57c"' }>
                                        <li class="link">
                                            <a href="injectables/PhoneConfirmationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PhoneConfirmationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RateModule.html" data-type="entity-link" >RateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' : 'data-bs-target="#xs-controllers-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' :
                                            'id="xs-controllers-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' }>
                                            <li class="link">
                                                <a href="controllers/RateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' : 'data-bs-target="#xs-injectables-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' :
                                        'id="xs-injectables-links-module-RateModule-95af721c3ad9c3989ddcb89ebdc38077d71b7c6f5aab093f51cf60c2bfc1f391dbd35ceb6f8d50575a1d2ecb8ceb8434ceb30b438ecd8eebb9881301556d4a63"' }>
                                        <li class="link">
                                            <a href="injectables/RateRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RateRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RateService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RateService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UploadFilesModule.html" data-type="entity-link" >UploadFilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' : 'data-bs-target="#xs-controllers-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' :
                                            'id="xs-controllers-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' }>
                                            <li class="link">
                                                <a href="controllers/UploadFilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' : 'data-bs-target="#xs-injectables-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' :
                                        'id="xs-injectables-links-module-UploadFilesModule-d89dfed49e13f2642e0ddcaf455df48b3cac7a48bf23b28188ac232d9dfd40ce714a4b41e9d828aad0cf26774c7cb4980b8889a035d5d24125b616df691cee63"' }>
                                        <li class="link">
                                            <a href="injectables/UploadFilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UploadFilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' :
                                            'id="xs-controllers-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' :
                                        'id="xs-injectables-links-module-UsersModule-56179578aa801161b6b7a30044334d1e705a9131b75b87749a74d4438193cd6e4aad3a8d2d2a62a7cd157b0fda6cb1af17c1fd910d152ca9a8ae2c74a9e13568"' }>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AllExceptionsFilter.html" data-type="entity-link" >AllExceptionsFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseAbstractRepository.html" data-type="entity-link" >BaseAbstractRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseModel.html" data-type="entity-link" >BaseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordDto.html" data-type="entity-link" >ChangePasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChatGateway.html" data-type="entity-link" >ChatGateway</a>
                            </li>
                            <li class="link">
                                <a href="classes/CheckCodeToResetDto.html" data-type="entity-link" >CheckCodeToResetDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Constants.html" data-type="entity-link" >Constants</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDto.html" data-type="entity-link" >CreateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePhoneConfirmationDto.html" data-type="entity-link" >CreatePhoneConfirmationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRateDto.html" data-type="entity-link" >CreateRateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterQueryOptionsUser.html" data-type="entity-link" >FilterQueryOptionsUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/FilterQueryUser.html" data-type="entity-link" >FilterQueryUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginFacebookDto.html" data-type="entity-link" >LoginFacebookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginGoogleDto.html" data-type="entity-link" >LoginGoogleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link" >Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginatedDto.html" data-type="entity-link" >PaginatedDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginationParams.html" data-type="entity-link" >PaginationParams</a>
                            </li>
                            <li class="link">
                                <a href="classes/ParamsWithId.html" data-type="entity-link" >ParamsWithId</a>
                            </li>
                            <li class="link">
                                <a href="classes/Password.html" data-type="entity-link" >Password</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rate.html" data-type="entity-link" >Rate</a>
                            </li>
                            <li class="link">
                                <a href="classes/RedisIoAdapter.html" data-type="entity-link" >RedisIoAdapter</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetPasswordDto.html" data-type="entity-link" >ResetPasswordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Student.html" data-type="entity-link" >Student</a>
                            </li>
                            <li class="link">
                                <a href="classes/subscribeNotificationDto.html" data-type="entity-link" >subscribeNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Teacher.html" data-type="entity-link" >Teacher</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateNotificationDto.html" data-type="entity-link" >UpdateNotificationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRateDto.html" data-type="entity-link" >UpdateRateDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundException.html" data-type="entity-link" >UserNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/VerifyPhoneDto.html" data-type="entity-link" >VerifyPhoneDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/WebsocketsExceptionFilter.html" data-type="entity-link" >WebsocketsExceptionFilter</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CacheConfigService.html" data-type="entity-link" >CacheConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleOauthGuard.html" data-type="entity-link" >GoogleOauthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadCloudinary.html" data-type="entity-link" >UploadCloudinary</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UploadDigitalOceanSpace.html" data-type="entity-link" >UploadDigitalOceanSpace</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RolesGuard.html" data-type="entity-link" >RolesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/WsJwtGuard.html" data-type="entity-link" >WsJwtGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BaseMessageWithToken.html" data-type="entity-link" >BaseMessageWithToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BaseMessageWithTokenTesting.html" data-type="entity-link" >BaseMessageWithTokenTesting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LocalFilesInterceptorOptions.html" data-type="entity-link" >LocalFilesInterceptorOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginResponse.html" data-type="entity-link" >LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MessageBody.html" data-type="entity-link" >MessageBody</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PushToken.html" data-type="entity-link" >PushToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/queryParamsWithId.html" data-type="entity-link" >queryParamsWithId</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RequestWithUser.html" data-type="entity-link" >RequestWithUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SendNotificationMethod.html" data-type="entity-link" >SendNotificationMethod</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TokenPayload.html" data-type="entity-link" >TokenPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});