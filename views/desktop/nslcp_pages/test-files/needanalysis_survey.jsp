﻿<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>南山人壽</title>
	<link rel="stylesheet" href="${commonResourcePath}/js/needanalysis/Scripts/plugin/ion-rangeSlider/css/ion.rangeSlider.css" />
	<link rel="stylesheet" href="${commonResourcePath}/js/needanalysis/Content/css/style.css?CSS=20160420_01" />
</head>
<body>
	<div class="l-body">
		<header class="l-header">
			<h1 class="logo">
				<a href="http://www.nanshanlife.com.tw/" class="link hide-text" target="_blank">
					<em>南山人壽</em>
				</a>
			</h1>
			<div class="insurance-wrap">
				<em class="wording">你需要的保障 /</em>
				<div class="cost">
					<span class="dollar">$ <b>1,234,567,890</b></span>
				</div>
			</div>
		</header>
		<div class="l-main is-index">
			<div class="l-content index">
				<h2 class="page-title hide-text">這是個殘酷中帶著促咪的小測驗，評估你的人生需要多少保障才足夠？</h2>
				<em class="slogan hide-text">只要6分鐘，就能護一生</em>
				<div class="btn-area">
					<button class="btn-notify jq-lightbox">
						<em class="hide-text">個資告知暨同意事項</em>
					</button>
					<button class="btn-check b-middle jq-required">
						<em class="hide-text">同意</em>
					</button>
					<button class="btn-check disagree b-middle jq-checkbox">
						<em class="hide-text">不同意</em>
					</button>
				</div>
				<button class="btn-start hide-text jq-start"><em>開始遊戲</em></button>
				<i class="icon-flying-bird"></i>
				<i class="icon-flying-bird reverse"></i>
			</div>
			<div class="l-content quest quest-1" data-quest="1">
				<div class="stage cut-1">
					<ul class="choice-list jq-transition" data-first="true" data-select="">
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="girl">
								<em class="hide-text">女</em>
							</button>
							<div class="image-wrap girl"></div>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="boy">
								<em class="hide-text">男</em>
							</button>
							<div class="image-wrap boy"></div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你的性別？</em>
					</h2>
				</div>
				<div class="stage cut-2">
					<ul class="choice-list jq-transition" data-first="true" data-select="" data-reverse="">
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="single">
								<em class="hide-text">單身</em>
							</button>
							<div class="image-wrap girl"></div>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="merried">
								<em class="hide-text">已婚</em>
							</button>
							<div class="image-wrap boy"></div>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你婚了嗎？</em>
					</h2>
				</div>
				<div class="stage cut-3">
					<div class="choice-list jq-transition">
						<div class="image-wrap" data-age="young"></div>
						<div class="range-slider">
							<input class="slider-picker age-slider">
						</div>
					</div>
					<h2 class="quest-title hide-text">
						<em>你的年齡？</em>
					</h2>
				</div>
				<div class="stage cut-4">
					<ul class="kids-selector">
						<li class="list">
							<em class="desc">學齡前(0-3歲)</em>
							<input class="slider-picker amount-slider" data-age="baby">
						</li>
						<li class="list">
							<em class="desc">幼稚園(4-6歲)</em>
							<input class="slider-picker amount-slider" data-age="kindergarten">
						</li>
						<li class="list">
							<em class="desc">國小(7-12歲)</em>
							<input class="slider-picker amount-slider" data-age="elementary">
						</li>
						<li class="list">
							<em class="desc">國中(13-15歲)</em>
							<input class="slider-picker amount-slider" data-age="juniorHigh">
						</li>
						<li class="list">
							<em class="desc">高中(16-18歲)</em>
							<input class="slider-picker amount-slider" data-age="seniorHigh">
						</li>
						<li class="list">
							<em class="desc">大學(19-22歲)</em>
							<input class="slider-picker amount-slider" data-age="collage">
						</li>
						<li class="list">
							<em class="desc">研究所以上</em>
							<input class="slider-picker amount-slider" data-age="institute">
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="dinky">
								<em class="hide-text">沒有小孩</em>
							</button>
							<em class="desc">沒有小孩</em>
						</li>
					</ul>
					<h2 class="quest-title hide-text">
						<em>你有小孩嗎？</em>
					</h2>
					<div class="kids-pool">
						<ul class="institute">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="collage">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="seniorHigh">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="juniorHigh">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="elementary">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="kindergarten">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="baby">
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
							<li class="doll"></li>
						</ul>
						<ul class="dog">
							<li class="doll"></li>
						</ul>
					</div>
				</div>
				<div class="stage cut-5">
					<ul class="choice-list jq-transition chosen-girl">
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="young">
								<em class="hide-text">社會新鮮人</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="new-couple">
								<em class="hide-text">新婚一年內</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="pregnant">
								<em class="hide-text">懷孕中</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="near-retired">
								<em class="hide-text">計畫退休</em>
							</button>
						</li>
						<li class="list">
							<button class="btn-check jq-checkbox" data-meta="retired">
								<em class="hide-text">已退休</em>
							</button>
						</li>
					</ul>
					<div class="image-wrap"></div>
					<h2 class="quest-title hide-text">
						<em>你正處於哪個人生階段？</em>
						<em>可複選 非必填</em>
					</h2>
				</div>
				<div class="stage cut-6">
					<div class="choice-list jq-transition">
						<div class="image-wrap" data-level=""></div>
						<div class="range-slider">
							<input class="slider-picker income-slider">
						</div>
					</div>
					<h2 class="quest-title hide-text">
						<em>不好意思，你的年收入？</em>
					</h2>
				</div>
				<div class="stage cut-7">
					<div class="image-wrap">
						<span class="money-bag back"></span>
						<span class="bird-left"></span>
						<span class="bird-right"></span>
						<span class="money-bag front"></span>
						<span class="money-erupt"></span>
						<span class="star left"></span>
						<span class="star bottom"></span>
						<span class="star bottom-right"></span>
						<span class="star right"></span>
						<span class="star top-right"></span>
					</div>
					<h2 class="quest-title hide-text">
						<em>每天睜開眼睛就要花錢，立馬診斷你的生活開銷吧！</em>
					</h2>
				</div>
				<div class="stage cut-14">
					<div class="image-wrap"></div>
					<h2 class="quest-title hide-text">
						<em>人生沒有夢想，跟鹹魚有什麼分別？但夢想不該只停在「想」 能夠實現的人早就捲起袖口做了這個小測驗（恭喜邁開第一步！）在每個階段，設定不同的目標 現在所做的每一分準備，都將為你擺脫鹹魚人生</em>
					</h2>
				</div>
				<ol class="step-list complete-phase-0">
					<li class="list">
						<em>基本資料</em>
					</li>
					<li class="list">
						<em>生活開銷</em>
					</li>
					<li class="list">
						<em>夢想藍圖</em>
					</li>
					<li class="list">
						<em>戰力評估</em>
					</li>
					<li class="list">
						<em>分析結果</em>
					</li>
					<li class="bg-line"></li>
					<li class="step-line"></li>
				</ol>
				<button class="btn-topic btn-prev jq-topic hide-text">
					<em>上一題</em>
				</button>
				<button class="btn-topic btn-next jq-topic hide-text">
					<em>下一題</em>
				</button>
			</div>
		</div>
		<footer class="l-footer">
			<div class="m-footer">
				<div class="m-footer-hd">
					<ul class="info-list">
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/Public_web/privacy.html">隱私權保護聲明</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/Public_web/sitemap.html">網站地圖</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/eServicePublic/publicweb/mailbox/MailBox.action" target="_blank">聯絡南山</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/public_promotion/subject/edm/layout.htm" target="_blank">南山保戶雙月刊</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/Public_web/declare.html">網站使用條款</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/Public_web/About/CompanyInformation/CompanyInformation/companyInformation.html">資訊公開</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/eservice/file/PPD/tax_model.pdf" target="_blank">實質課稅原則專區</a></li>
						<li class="list"><a class="link" href="http://www.nanshanlife.com.tw/eServicePublic/publicweb/productinfo/ProductInfo.action?method:doLaw107=x">保險法第107條說明專區</a></li>
					</ul>
				</div>
				<div class="m-footer-bd">
					<small class="copyright">Copyright © 2010 Nan Shan Life Insurance Company, Ltd. All rights reserved.</small>
					<p class="address">南山人壽總公司　台北市信義區莊敬路168號　客服中心電話：0800-020-060  <a class="link" href="http://www.nanshanlife.com.tw/Public_web/Service/file/CA/voice.pdf" target="_blank">﹝語音操作手冊﹞</a> 海外諮詢專線：886-2-8752-2111</p>
				</div>
			</div>
		</footer>
		<div class="l-lightbox">
			<div class="m-box">
				<div class="m-box-header">
					<button class="btn-close jq-close hide-text">關閉</button>
				</div>
				<div class="m-box-body">
					<h3 class="box-title">個人資料告知及同意事項</h3>
					<p>一、南山人壽保險股份有限公司(下稱本公司)依據個人資料保護法（以下稱個資法）第八條第一項規定，向您告知下列事項，請您詳閱：本公司蒐集您的姓名、性別、年齡及您所提供其他之個人資料，係基於人身保險(包括提供保險相關資訊、產品或服務)、契約、類似契約或其他法律關係事務、消費者、客戶管理與服務、其他經營合於營業登記項目或組織章程所定之業務之目的。您的個人資料在前開蒐集目的及法令規定之保存期間內，將由本公司於合於法令規定的利用方式，於我國境內供本(分)公司及業務委外機構處理及利用。對於本公司保有您的個人資料，您得以書面方式向本公司查詢或請求閱覽、製給複製本、補充或更正、停止蒐集、處理或利用、刪除。倘您不願意提供個人資料或是提供不完全時，本公司將可能無法提供您適當之保險資訊與服務。</p>
					<p>二、本人已詳閱上述個人資料告知事項，並同意南山人壽就本人所提供之個人資料，於「個人資料保護法」所規定之範圍內，有為蒐集、處理及利用之權利。</p>
				</div>
				<div class="m-box-footer">
					<button class="btn-close jq-close">我了解了</button>
				</div>
			</div>
		</div>
	</div>
	<div class="img-wrap">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/checked.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/girl-door.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/boy-door.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/bg-exams.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/bg-slider.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/shared.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q2/ani-q2-girl.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q2/ani-q2-boy.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q3/ani-q3-girl.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q3/ani-q3-boy.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-institute.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-collage.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-seniorHigh.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-juniorHigh.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-elementary.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-kindergarten.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-baby.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q4/ani-q4-dog.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-young.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-new-couple.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-pregnant.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-near-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-girl-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-young.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-new-couple.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-pregnant.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-near-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q5/ani-q5-boy-retired.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q6/ani-q6.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-bird-left.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-bird-right.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-money.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q7/ani-q7-star.png" alt="">
		<img class="b-lazy" src="${commonResourcePath}/js/needanalysis/Content/img/q14/ani-q14.png" alt="">
	</div>
	<form:form action="" method="post"  commandName="ajaxToken">
	</form:form>
</body>
<script type="text/javascript">
	/*<![CDATA[*/
	<%-- Define a javascript variable to hold the content path --%>
	var NSLCP = { config: {} };
	NSLCP.config.contextPath = "${contextPath}";
	NSLCP.config.encodedContextPath = "${encodedContextPath}";
	NSLCP.config.commonResourcePath = "${commonResourcePath}";
	NSLCP.config.themeResourcePath = "${themeResourcePath}";
	NSLCP.config.siteResourcePath = "${siteResourcePath}";
	NSLCP.config.rootPath = "${siteRootUrl}";	
	/*]]>*/
</script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/jquery/jquery.min.js?JS=20160216_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/lazyload/jquery.lazyload.min.js?JS=20160216_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/plugin/ion-rangeSlider/ion.rangeSlider.min.js?JS=20160216_01"></script>
<!-- <script src="../Scripts/plugin/rangeslider/rangeslider.min.js?JS=20160216_01"></script> -->
<script src="${commonResourcePath}/js/needanalysis/Scripts/js/factory.js?JS=20160420_01"></script>
<script src="${commonResourcePath}/js/needanalysis/Scripts/js/common.js?JS=20160420_01"></script>
</html>