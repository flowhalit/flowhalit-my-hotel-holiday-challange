!function(){const e={Items:[],index:0};const l=$(".hotel-wrapper"),t=new Proxy([],{get(t,i){const a=t[i];return"function"==typeof a?["push","unshift"].includes(i)?function(a){var e;return e=a,l.append(`<article>
        <div class="panel panel-default"> 
            <div class="panel-heading">
                <h2>
                    <a href="${e.url}" title="${e.hotelName}" target="_blank" data-decid="${e.hotelName}">
                        ${e.hotelName}
                    </a>
                </h2>
                <a href="${e.url}" target="_blank">
                    <div class="${e.customersPointCssName} position-relative">
                        <div class="score__left">
                            <div class="title">${e.customersPointText}</div>
                            <div class="desc">${e.reviewCount} Değerlendirme</div>
                        </div>
                        <div class="score__right">${e.customerScore} </div>
                    </div>
                </a>
            </div>
            <div class="panel-body">
                <div class="">
                    <div class="col-lg-4 col-md-3 col-sm-4 col-xs-12 img-mask">
                        <a href="${e.url}" target="_blank">
                        <img width="257" height="171" data-src="${e.photoPath}"  title="${e.hotelName}" alt="${e.hotelName}" class="img-responsive lazy-loaded-image lozad" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFhAJ/wlseKgAAAABJRU5ErkJggg==" />
                        </a>
                        <div class="badge-list badge-list--top-right badge-list--bottom-right-mobile"> </div>
                        <div class="badge-list badge-list--bottom-left" data-magic="False">
                            <div class="badge-list__item badge-list__item--payathotel" data-toggle="tooltip" data-placement="top" title="" data-original-title="%25 Ön Ödeme Yaparak Rezervasyonunuzu Tamamlayabilirsiniz">
                                <span>Ön Ödeme Fırsatı</span>
                            </div>
                            <div class="badge-list__item badge-list__item--covid" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sağlıklı Turizm Sertifikalı">
                                <span>Sağlık Sertifikalı</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 col-sm-5 col-xs-6 otel-item-content">
                        <p> <i class="fa fa-map-marker" aria-hidden="true"></i>${e.areaName} - ${e.subAreaName} ${e.subAreaDetailName?"| "+e.subAreaDetailName:""}</p>
                        <p class="erk-promo">${e.campaignName}</p>
                        <div class="free-cancellation-info" data-toggle="tooltip" data-placement="top" title="" data-original-title="Girişte Öde ile rezervasyon yaparak giriş gününe 72 saat kalaya kadar ücretsiz koşulsuz iptal fırsatından yararlanabilirsiniz.">
                            <img src="./assets/images/room-card-info-icon.svg" width="14" height="14" alt="Ücretsiz İptal" />
                            Ücretsiz İptal
                        </div>
                        <div class="hotelFeatures">
                            <ul class="hotelFeaturesList">${e.hotelPropertyList.map(a=>'<li class="hotelFeaturesList__hotelFeaturesTooltip '+a.code+'"><i class="hotelFeaturesTooltip-icon"></i>'+a.name+"</li>").join("")}</ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 otel-list__price-box">
                        <div class="otel-list__price-box__content">
                            <p class="hostel-type">${e.accommodation}</p>
                            <p class="currency">${e.price}<small class="price-currency">${e.currency}</small></p>
                            <p class="discount-price">${parseFloat(e.discountPrice.toString().match(/^\d+(?:\.\d{0,2})?/))}<small class="price-currency">${e.currency}</small></p>
                            <a href="${e.url} target="_blank" class="btn btn-block btn-primary">Detayları İncele</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>`),Array.prototype[i].apply(t,arguments)}:["pop"].includes(i)?function(){return Array.prototype[i].apply(t,arguments)}:a.bind(t):a}});$.getJSON("/api/hotels.json",function(a){e.Items=a,e.Items.forEach(a=>t.push(a))}).done(function(a){const e=lozad(".lozad",{load:function(a){a.src=a.getAttribute("data-src")}});e.observe()})}();