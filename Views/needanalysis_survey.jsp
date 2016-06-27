﻿<!DOCTYPE html>
<html lang="en">
<head>	
	<meta charset="UTF-8">
	<title>南山人壽</title>
	<style>
		table {
			border-spacing: 0;
		}

		table.layout > tbody > tr:nth-child(odd) {
			background: #f2f2ff;
		}

		table.layout > tbody > tr > td {
			padding: 5px 10px;
		}
	</style>
</head>
<body>
	<input type="hidden" id="CSRFToken" name="CSRFToken" value="f34ff75b-272a-418d-8835-21cb33e41f50">
	<table class="layout">
		<tr>
			<td>
				<strong>1. 生活支出 </strong>
			</td>
			<td>
				<input type="text" class="annualIncome1" value="289">
			</td>
			<td>
				<button class="livingExpenses">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>2. 家庭维持基金 </strong>
			</td>
			<td>
				<span>小孩年紀(輸入多筆以逗點隔開)</span>
				<input type="text" class="childList" value="10,12">
			</td>
			<td>
				<button class="familyMaintenanceFund">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>3. 寿险/社保已有 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>投保類別</span>
						</td>
						<td>
							<select name="type" id="type">
								<option value="a">勞保</option>
								<option value="b">公保</option>
								<option value="c">農保</option>
								<option value="d">軍保</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>
							<span>投保薪資</span>
						</td>
						<td>
							<input type="text" class="insuranceSalary" value="289">
						</td>
					</tr>
					<tr>
						<td>
							<span>基本開銷</span>
						</td>
						<td>
							<input type="text" class="basicPay" value="">
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="existingSocialLifeInsurance">送出</button>
			</td>
			<td><p>投保類別 單選還是多選？</p></td>
		</tr>
		<tr>
			<td>
				<strong>4. 寿险南山保单已有 </strong>
			</td>
			<td><span>--</span></td>
			<td>
				<button class="existingNanshanLifeInsurance">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>5. 理财/教育基金需求 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>小孩年紀(輸入多筆以逗點隔開)</span>
						</td>
						<td>
							<input type="text" class="age" value="10,12">
						</td>
					</tr>
					<tr>
						<td>
							<span>小孩教育程度(輸入多筆以逗點隔開)</span>
						</td>
						<td>
							<input type="text" class="eduType" value="1,1">
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="financialEducationFundDemand">送出</button>
			</td>
			<td>
				<span>eduType 值的意義與分界為何？</span>
			</td>
		</tr>
		<tr>
			<td>
				<strong>6. 理财/退休金需求 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>退休年齡</span>
						</td>
						<td>
							<input type="text" class="retirementAge" value="60">
						</td>
					</tr>
					<tr>
						<td>
							<span>退休後每月支出</span>
						</td>
						<td>
							<input type="text" class="monthlyLivingExpensesAfterRetirement" value="2400">
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="financialPensionNeeds">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>7. 理财/退休金社保已有/一次给付 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>每月保險費用</span>
						</td>
						<td>
							<input type="text" class="monthlyInsuranceSalary7" value="2000">
						</td>
					</tr>
					<tr>
						<td>
							<span>投保年數</span>
						</td>
						<td>
							<input type="text" class="insuredYears" value="24">
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="existingSocialInsurancePensionFinancialOnePayment">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>8. 理财/退休金社保已有/劳工退休金 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>每月保險費用</span>
						</td>
						<td>
							<input type="text" class="monthlyInsuranceSalary8" value="2000">
						</td>
					</tr>
					<tr>
						<td>
							<span>勞保新/舊制</span>
						</td>
						<td>
							<label>
								<span>新制</span>
								<input type="radio" name="ruleType" class="ruleType" value="1">
							</label>
							<label>
								<span>舊制</span>
								<input type="radio" name="ruleType" class="ruleType" value="2">
							</label>
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="existingSocialInsurancePensionFinancialLaborPension">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>9. 南山現有保險理財額度 </strong>
			</td>
			<td><span>--</span></td>
			<td>
				<button class="nanshanExistingInsuranceFinancingAmount">送出</button>
			</td>
			<td></td>
		</tr>
		<tr>
			<td>
				<strong>10. 住院医疗共同问项 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>病房等級</span>
						</td>
						<td>
							<select name="roomType" id="roomType">
								<option value="1">健保房</option>
								<option value="2">雙人房</option>
								<option value="3">單人房</option>
								<option value="4">特等房</option>
								<option value="5">VIP房</option>
								<option value="6">頂級房</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>
							<span>說明原因</span>
						</td>
						<td>
							<select name="selfPayItemOption" id="selfPayItemOption">
								<option value="1">使用健保資源即可，能不自掏腰包最好</option>
								<option value="2">如果是病情需要的自費項目，就花吧!!</option>
								<option value="3">追求最好的醫療品質，即使是昂貴的自費項目也通通要</option>
							</select>
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="commonInpatientMedicalItems">送出</button>
			</td>
			<td>
				<p>1. Output三個結果分別代表什麼？</p>
				<p>2. 單選還是多選？</p>
			</td>
		</tr>
		<tr>
			<td>
				<strong>11. 重大疾病/癌症醫療共同問項 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>年收入</span>
						</td>
						<td>
							<input type="text" class="annualIncome11" value="5454">
						</td>
					</tr>
					<tr>
						<td>
							<span>補助需求</span>
						</td>
						<td>
							<select name="recuperationIncomeCompensationOption" id="recuperationIncomeCompensationOption">
								<option value="1">無需收入補償，只要基本醫療費用即可</option>
								<option value="2">除了基本醫療費用外，應該還需要療養1年</option>
								<option value="3">除了基本醫療費用外，應該還需要療養3年</option>
								<option value="4">除了基本醫療費用外，應該還需要療養5年以上</option>
							</select>
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="commonMajorDiseaseCancerCareItems">送出</button>
			</td>
			<td><p>單選還是多選？</p></td>
		</tr>
		<tr>
			<td>
				<strong>12. 長期照顧需求 </strong>
			</td>
			<td>
				<select name="longTermCareOption" id="longTermCareOption">
					<option value="1">由家人自行照顧</option>
					<option value="2">白天聘請專人照顧</option>
					<option value="3">全天聘請專人照顧</option>
					<option value="4">入住療養機構</option>
				</select>
			</td>
			<td>
				<button class="longTermCareNeeds">送出</button>
			</td>
			<td><p>單選還是多選？</p></td>
		</tr>
		<tr>
			<td>
				<strong>13. 意外殘廢需求 </strong>
			</td>
			<td>
				<table>
					<tr>
						<td>
							<span>年收入</span>
						</td>
						<td>
							<input type="text" class="annualIncome13" value="5454">
						</td>
					</tr>
					<tr>
						<td>
							<span>補助需求</span>
						</td>
						<td>
							<select name="recuperationIncomeSubsidy" id="recuperationIncomeSubsidy">
								<option value="1">3年療養收入補貼</option>
								<option value="2">5療養收入補貼</option>
								<option value="3">7年療養收入補貼</option>
								<option value="4">10年療養收入補貼</option>
							</select>
						</td>
					</tr>
				</table>
			</td>
			<td>
				<button class="accidentalDisabilityDemand">送出</button>
			</td>
			<td><p>單選還是多選？</p></td>
		</tr>
		<tr>
			<td>
				<strong>14. 南山現有医疗保障額度 </strong>
			</td>
			<td>
				<select name="l2Account" id="l2Account">
					<option value="hospitalizationDay">住院額度</option>
					<option value="sundry">杂费</option>
					<option value="surgery">手术</option>
					<option value="cancer">癌症</option>
					<option value="majorDisease">重大疾病</option>
					<option value="accident">意外</option>
					<option value="longTermCare">长看</option>
				</select>
			</td>
			<td>
				<button class="nanshanExistingMedicalInsurantAmount">送出</button>
			</td>
			<td><p>單選還是多選？</p></td>
		</tr>
		<tr>
			<td>
				<strong>15. 最終計算 </strong>
			</td>
			<td>
				<table class="totalCount">
					<tr>
						<td>壽險需求</td>
						<td><input type="text" class="traditionalLiftNeed" value="300"></td>
					</tr>
					<tr>
						<td>壽險已有</td>
						<td><input type="text" class="traditionalLiftExist" value="0"></td>
					</tr>
					<tr>
						<td>理財需求</td>
						<td><input type="text" class="ilpNeed" value="1000"></td>
					</tr>
					<tr>
						<td>理財已有</td>
						<td><input type="text" class="ilpExist" value="0"></td>
					</tr>
					<tr>
						<td>理財目標</td>
						<td>
							<select name="ilpDream" id="ilpDream">
								<option value="1">教育</option>
								<option value="2">退休</option>
								<option value="3">百百種</option>
							</select>
						</td>
					</tr>
					<tr>
						<td>住院日額需求</td>
						<td><input type="text" class="mc1Need" value="0"></td>
					</tr>
					<tr>
						<td>住院日額已有</td>
						<td><input type="text" class="mc1Exist" value="0"></td>
					</tr>
					<tr>
						<td>住院雜費需求</td>
						<td><input type="text" class="mc2Need" value="0"></td>
					</tr>
					<tr>
						<td>住院雜費已有</td>
						<td><input type="text" class="mc2Exist" value="0"></td>
					</tr>
					<tr>
						<td>手術補償需求</td>
						<td><input type="text" class="mc3Need" value="0"></td>
					</tr>
					<tr>
						<td>手術補償已有</td>
						<td><input type="text" class="mc3Exist" value="0"></td>
					</tr>
					<tr>
						<td>重大疾病需求</td>
						<td><input type="text" class="mc4Need" value="0"></td>
					</tr>
					<tr>
						<td>重大疾病已有</td>
						<td><input type="text" class="mc4Exist" value="0"></td>
					</tr>
					<tr>
						<td>癌症醫療需求</td>
						<td><input type="text" class="mc5Need" value="500"></td>
					</tr>
					<tr>
						<td>癌症醫療已有</td>
						<td><input type="text" class="mc5Exist" value="110"></td>
					</tr>
					<tr>
						<td>長期照顧需求</td>
						<td><input type="text" class="mc6Need" value="100"></td>
					</tr>
					<tr>
						<td>長期照顧已有</td>
						<td><input type="text" class="mc6Exist" value="0"></td>
					</tr>
					<tr>
						<td>意外殘廢需求</td>
						<td><input type="text" class="mc7Need" value="0"></td>
					</tr>
					<tr>
						<td>意外殘廢已有</td>
						<td><input type="text" class="mc7Exist" value="0"></td>
					</tr>
					<tr>
						<td>年收入</td>
						<td><input type="text" class="annualIncome15" value="1200000"></td>
					</tr>
					<tr>
						<td>人生階段</td>
						<td>
							<select name="lifeEvent" id="lifeEvent">
								<option value="1">社會新鮮人</option>
								<option value="2">新婚</option>
								<option value="3">懷孕中</option>
								<option value="4">計畫退休</option>
								<option value="5">已退休</option>
							</select>
						</td>
					</tr>
				</table>
			</td>
			<td>
				<form name="nanForm" method="post" action="/member/needanalysis/survey/do">
					<input type="hidden" class="totalData" name="totalData" value="">
					<button type="submit">送出</button>
				</form>
			</td>
			<td>
				<p>1. Exist & Exis 沒有統一</p>
				<p>2. 理財目標、人生階段 單選還是多選？</p>
			</td>
		</tr>
	</table>
</body>
<script src="../Scripts/plugin/jquery/jquery.min.js?JS=20160216_01"></script>
<script src="../Scripts/js/test.js"></script>
</html>