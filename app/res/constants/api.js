var cricketapi='https://t10cricket.live/myrest/user/';
var teamapi='https://t10cricket.live/myrest/user/team_list?';
var contest='https://t10cricket.live/myrest/user/contest_list?';
var my_join_contest_list_live= 'https://t10cricket.live/myrest/user/my_join_contest_list_live?'
var status_type='https://t10cricket.live/myrest/user/get_contest_categories?';
var prizeapi='https://t10cricket.live/myrest/user/winning_info?';
var leaderboardapi='https://t10cricket.live/myrest/user/joined_contest?';
var my_accountapi='https://t10cricket.live/myrest/user/my_account?'
var walletAmountApi='https://t10cricket.live/myrest/user/my_account?user_id='
var recentTransactionsApi='https://t10cricket.live/myrest/user/my_account_transaction/?user_id='
var getPanCardApi='https://t10cricket.live/myrest/user/user_pancard/?user_id='
var getVerficationCodeApi='https://t10cricket.live/myrest/user/verify_email_code?user_id='
var getBankDetailApi='https://t10cricket.live/myrest/user/bank_detail?user_id='

// Post Apis

var saveteam='https://t10cricket.live/myrest/user/save_team';
var joincontestapi='https://t10cricket.live/myrest/user/join_contest'
var contetsFullApi='https://t10cricket.live/myrest/user/clone_contest'
var addCashApi='https://t10cricket.live/myrest/user/add_amount'
var uploadPanCardDetailsApi='https://t10cricket.live/myrest/user/update_documents'
var emailVerificationStatus='https://t10cricket.live/myrest/user/email_verification'

var statsApi='https://t10cricket.live/myrest/user/match_stats/?'
var uploadBankDetailsApi='https://t10cricket.live/myrest/user/bank_verification'
var postUserEmailApi='https://t10cricket.live/myrest/user/update_email'
var postWithdrawAmountApi='https://t10cricket.live/myrest/user/withdrow_amount'

//realmatch live score api

var matchInfo='https://rest.entitysport.com/v2/matches/';

//auth api link
var signUp ='https://t10cricket.live/myrest/user/user_registration'
var login='https://t10cricket.live/myrest/user/login'
var resentOtp='https://t10cricket.live/myrest/user/resend_otp'
var numberVarify='https://t10cricket.live/myrest/user/user_number_verify'
var signupotp='https://t10cricket.live/myrest/user/save_otp'
var countryState='https://t10cricket.live/myrest/user/get_state'
var city ='https://t10cricket.live/myrest/user/get_city?state_id'
var profileImage ='https://t10cricket.live/myrest/user/update_user_profile_image'
var profile ='https://t10cricket.live/myrest/user/edit_profile'
var showProfile ='https://t10cricket.live/myrest/user/view_profile?user_id'
 var myTeam = 'https://t10cricket.live/myrest/user/my_team?'
// var myTeam ='http://t10cricket.live/myrest/user/my_team?'

//myStats
var myStatsApi='https://t10cricket.live/myrest/user/playing_history?user_id='

var changePhoneOtpApi="https://t10cricket.live/myrest/user/change_phone_otp"
var postUserOtp='https://t10cricket.live/myrest/user/user_number_verify'
var upgradeApp='https://t10cricket.live/myrest/user/update_app'
var avatarImagesApi='https://t10cricket.live/myrest/user/update_user_profile_avatar'
var maintance='https://t10cricket.live/myrest/user/check_maintenance'
export default{
    cricketapi,
    teamapi,
    contest,
    my_join_contest_list_live,
    status_type,
    prizeapi,
    leaderboardapi,
    my_accountapi,
    saveteam,
    joincontestapi,
    contetsFullApi,
    walletAmountApi,
    addCashApi,
    uploadPanCardDetailsApi,
    recentTransactionsApi,
    getPanCardApi,
    matchInfo,
    getVerficationCodeApi,
    statsApi,
    emailVerificationStatus,
    uploadBankDetailsApi,
    signUp,
    login,
    numberVarify,
    countryState,
    city,
    getBankDetailApi,
    postUserEmailApi,
    profileImage,
    profile,
    resentOtp,
    postWithdrawAmountApi,
    showProfile,
    myTeam,
    myStatsApi,
    changePhoneOtpApi,
    postUserOtp,
    upgradeApp,
    avatarImagesApi,
    maintance,
    signupotp,
}
