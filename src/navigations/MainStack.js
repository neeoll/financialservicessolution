import React from 'react';
import {Screens} from '../constants';
import {
  Card,
  ChangePassword,
  PackageDetails,
  PackageList,
  Packages,
  PaymentPackage,
  UpdateProfile,
  MoneySenderList,
  ScanQrCode,
  EnterSendMoney,
  ManageCard,
  ManageCardDetail,
  OnBoarding,
  Login,
  SignUp,
  MoneyReceiverList,
  EnterReceiveMoney,
  ReceiveMoneyQr,
  MyGoals,
  CreateMyGoals,
  Claim,
  PayCycle,
  Property,
  PropertyDetail,
  Transactions,
  RoundUp,
  AnalysisData,
  PrivacyPolicy,
  Document,
  Referral,
  HelpSupport,
  KycDocuments,
  OpenYourAccount,
  VerifyMail,
  AccountConfirmation,
  MobileScreen,
  ConsentScreen,
  VerifyIdentity,
  AddNewCard,
  AddBankAccount,
  MonthlyBudget,
  ElectricityPay,
  ElectricityPayDetail,
  ElectricityEnterPayment,
  PhoneRecharge,
  PhoneRechargePlan,
  BillPay,
  Insurance,
  InsuranceDetail,
  HealthInsurance,
  HealthInsurancePlans,
  Investments,
  InvestmentDetail,
  Receipts,
  Loan,
  MarketPlace,
  CarDetail,
  Subscription,
  BillPayProfile,
} from '../screens';
import TabRoutes from './TabRoutes';
import AmountGoalModal from '../screens/MainStackScreens/MyGoals/AmountGoalModal';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={Screens.TabRoutes}
        component={TabRoutes}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name={Screens.PackageDetails} component={PackageDetails} /> */}
      {/* <Stack.Screen name={Screens.PaymentPackage} component={PaymentPackage} /> */}
      <Stack.Screen name={Screens.UpdateProfile} component={UpdateProfile} />
      <Stack.Screen name={Screens.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={Screens.Card} component={Card} />
      <Stack.Screen name={Screens.Packages} component={Packages} />
      <Stack.Screen name={Screens.PackageList} component={PackageList} />
      <Stack.Screen
        name={Screens.MoneySenderList}
        component={MoneySenderList}
      />
      <Stack.Screen name={Screens.ScanQrCode} component={ScanQrCode} />
      <Stack.Screen name={Screens.EnterSendMoney} component={EnterSendMoney} />
      <Stack.Screen name={Screens.ManageCard} component={ManageCard} />
      <Stack.Screen
        name={Screens.ManageCardDetail}
        component={ManageCardDetail}
      />
      <Stack.Screen
        name={Screens.MoneyReceiverList}
        component={MoneyReceiverList}
      />
      <Stack.Screen
        name={Screens.EnterReceiveMoney}
        component={EnterReceiveMoney}
      />
      <Stack.Screen name={Screens.ReceiveMoneyQr} component={ReceiveMoneyQr} />
      <Stack.Screen name={Screens.MyGoals} component={MyGoals} />
      <Stack.Screen name={Screens.CreateMyGoals} component={CreateMyGoals} />
      <Stack.Screen name={Screens.Claim} component={Claim} />
      <Stack.Screen name={Screens.payCycle} component={PayCycle} />
      <Stack.Screen name={Screens.Property} component={Property} />
      <Stack.Screen name={Screens.PropertyDetail} component={PropertyDetail} />
      <Stack.Screen name={Screens.Transactions} component={Transactions} />
      <Stack.Screen name={Screens.RoundUp} component={RoundUp} />
      <Stack.Screen
        options={{
          presentation: 'transparentModal',
        }}
        name={Screens.AmountGoalModal}
        component={AmountGoalModal}
      />
      <Stack.Screen name={Screens.AnalysisData} component={AnalysisData} />
      <Stack.Screen name={Screens.PrivacyPolicy} component={PrivacyPolicy} />
      <Stack.Screen name={Screens.Document} component={Document} />
      <Stack.Screen name={Screens.Referral} component={Referral} />
      <Stack.Screen name={Screens.HelpSupport} component={HelpSupport} />
      <Stack.Screen name={Screens.KycDocuments} component={KycDocuments} />
      <Stack.Screen
        name={Screens.OpenYourAccount}
        component={OpenYourAccount}
      />
      <Stack.Screen name={Screens.VerifyMail} component={VerifyMail} />
      <Stack.Screen
        name={Screens.AccountConfirmation}
        component={AccountConfirmation}
      />
      <Stack.Screen name={Screens.ConsentScreen} component={ConsentScreen} />
      <Stack.Screen name={Screens.MobileScreen} component={MobileScreen} />
      <Stack.Screen name={Screens.VerifyIdentity} component={VerifyIdentity} />
      <Stack.Screen name={Screens.AddNewCard} component={AddNewCard} />
      <Stack.Screen name={Screens.AddBankAccount} component={AddBankAccount} />
      <Stack.Screen name={Screens.MonthlyBudget} component={MonthlyBudget} />
      <Stack.Screen name={Screens.ElectricityPay} component={ElectricityPay} />
      <Stack.Screen name={Screens.ElectricityPayDetail} component={ElectricityPayDetail} />
      <Stack.Screen name={Screens.ElectricityEnterPayment} component={ElectricityEnterPayment} />
      <Stack.Screen name={Screens.PhoneRecharge} component={PhoneRecharge} />
      <Stack.Screen name={Screens.PhoneRechargePlan} component={PhoneRechargePlan} />
      <Stack.Screen name={Screens.BillPay} component={BillPay} />
      <Stack.Screen name={Screens.Insurance} component={Insurance} />
      <Stack.Screen name={Screens.InsuranceDetail} component={InsuranceDetail} />
      <Stack.Screen name={Screens.HealthInsurance} component={HealthInsurance} />
      <Stack.Screen name={Screens.HealthInsurancePlans} component={HealthInsurancePlans} />
      <Stack.Screen name={Screens.Investments} component={Investments} />
      <Stack.Screen name={Screens.InvestmentDetail} component={InvestmentDetail} />
      <Stack.Screen name={Screens.Receipts} component={Receipts} />
      <Stack.Screen name={Screens.Loans} component={Loan} />
      <Stack.Screen name={Screens.MarketPlace} component={MarketPlace} />
      <Stack.Screen name={Screens.CarDetail} component={CarDetail} />
      <Stack.Screen name={Screens.Subscription} component={Subscription} />
      <Stack.Screen name={Screens.BillPayProfile} component={BillPayProfile} />
    </>
  );
}
