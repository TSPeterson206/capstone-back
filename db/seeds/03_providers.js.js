exports.seed = function(knex, Promise) {
  return knex('providers').insert([
    {id: 1, companyname:'2nd Chance Recovery Center, LLC', providerbio:'When here you can...Offer feed back in a confidential group setting. Have one-on-one counseling as needed with one of our Certified Substance Abuse Counselors. Know that you are respected as a person who has much to contribute to society', address:'235 SW 153rd St, Burien, WA 98166', services:'', avgrating:2.5, phone:'(206) 242-4915', businessphoto:'http://2ndchancerecoverycenter.com/wpimages/wp0392f65d_06.png', typeID:1},
    {id: 2, companyname:'A Positive Alternative, Inc', providerbio:'We are an established and successful outpatient alcohol and substance abuse treatment center in Seattle, Washington. We provide a unique and progressive approach to alcohol and chemical dependency treatment that is not based on the 12-step or AA (Alcoholics Anonymous) model. We view every client as a unique individual who requires an approach that deals effectively with their specific issues. 97% of all Treatment for Addictions in the U.S. is based on the AA (Alcoholics Anonymous) model and that working the 12-step program is the only legitimate form of recovery from substance abuse. We offer a successful alternative to that model, based on established research and decades of experience.', address:'4649 Sunnyside Ave N #200, Seattle, WA 98103', services:'', avgrating:'', phone:'(206) 547-1955', businessphoto:'http://apositivealternative.com/images/home-1.jpg', typeID:1},
    {id: 3, companyname:'Center For Human Services', providerbio:'Our Substance Abuse Department is dedicated to providing holistic treatment services for individuals who are harmfully involved with alcohol and/or other drugs. The substance abuse department’s mission is to reduce/eliminate substance abuse from the lives of our participants and their families. To fulfill this mission we offer prevention, intervention, and treatment services for youth and adults. Certified by Washington State, the Substance Abuse Department provides all services using evidence-based and innovative practices, many of which are nationally recognized. CARF accredited Assessment & Referral, Outpatient, Intensive Outpatient, and Court programs.', address:'14803 15th Ave NE, Seattle, WA 98155', services:'', avgrating:'', phone:'(206) 362-7282', businessphoto:'http://www.chs-nw.org/wp-content/uploads/2012/02/logo.png', typeID:1},
    {id: 4, companyname:'Friends Of Youth', providerbio:'Friends of Youth delivers a comprehensive range of therapeutic services for youth, young adults, and families. With over 66 years of experience, 26 program sites and national accreditation, the agency provides safe places and emotional support for youth in challenging circumstances.', address:'13116 NE 132nd Street, Kirkland, WA 98034-2306', services:'', avgrating:'', phone:'(425) 869-6490', businessphoto:'http://www.friendsofyouth.org/images/Logo%20Terry%20approved.jpg', typeID:1},
    {id: 5, companyname:'Hatfield Kevin, MD', providerbio:'"My goal is to provide excellent individualized health care to patients and families that integrates physical, mental and spiritual wellness. I view the doctor-patient relationship as a key partnership that can empower patients to lead healthier and happier lives.”', address:'', services:'', avgrating:'', phone:'206-860-4700', businessphoto:'http://vp.cdn.cityvoterinc.com/GetImage.ashx?img=00/00/01/07/69/64/1076964-489701.jpg&w=220&sq=1&cb=0', typeID:2},
    {id: 6, companyname:'Greenlake Primary Care', providerbio:'Greenlake Primary Care is an independent full service primary care medical clinic. Our doctors have specialties in Pediatrics, Internal Medicine, Family Medicine and Psychiatry (adult/child/adolescent). Founded by Anna Chavelle M.D. in the 60s and later transferred to Mary Starkebaum, M.D. in 2001, the clinic has been caring for families for over 50 years. The current owner, Naomi Busch, M.D., took over the practice in 2011 and continues their legacy of excellence. Dr. Busch was recognized as a Top Doctor by her physician peers in 2016. Committed to patient centered care where you and your doctor work together to heal and stay healthy, Greenlake Primary Care would love to serve you and your health care needs. Come visit us to see why we have some of the most loyal patients in Seattle!', address:'6800 E Green Lake Way N, #200 | Seattle, WA 98115', services:'', avgrating:'', phone:'206 524-5656', businessphoto:'http://greenlakeprimarycare.com/wp-content/uploads/2017/11/Providers.jpg', typeID:2},
    {id: 7, companyname:'Zahra A. Karmali, M.D.', providerbio:'Dr. Zahra A. Karmali is a Family Medicine specialist in Seattle, Washington. She attended and graduated from University of Washington School of Medicine in 2004, having over 14 years of diverse experience, especially in Family Medicine. Dr. Karmali is affiliated with Swedish Medical Center.', address:'800 5th Ave p100, Seattle, WA 98104', services:'', avgrating:'', phone:'(206) 320-3351', businessphoto:'https://www.swedish.org/~/media/Images/Swedish/physicians/Zahra%20Karmali.jpg', typeID:2},
    {id: 8, companyname:'Dr. Martin C. Cahn, MD', providerbio:'Martin C. Cahn M.D. is the director of the Northwest Primary Care Fremont Clinic. He is board certified in family medicine and sees everyone from newborn babies to seniors. Dr. Cahn earned his bachelors degree in biology from Massachusetts Institute of Technology and his M.D. from Tufts University School of Medicine, both in Boston.  Dr. Cahns clinical interests include applying new advances in technology to the practice of medicine. He sees his role as working with his patients to help them learn and take control of their health. In this partnership, he tries to provide his patients with the information they need, to always explain their options clearly, and to support them in their health goals.', address:'400 N 34th St Ste 203, Seattle, WA 98103', services:'', avgrating:'', phone:'(206) 545-9300', businessphoto:'https://medialib.aafp.org/content/dam/AAFP/migration/aafp_org/images/news_folder/aafp_news_now/ehr-special-report/ehr-soundoff-cahn.jpg.daijpg..jpg', typeID:2},
    {id: 9, companyname:'McKinnie Law PLLC', providerbio:'A Washington native, attorney Shane McKinnie has deep roots in our community, and he established our law firm with a mission to deliver the highest level of legal representation possible to those in need. As a Navy veteran and current reserve member, Mr. McKinnie understands the unique legal challenges that affect military service members and their families, enabling him to provide services that more effectively meet their specific needs. Whether dealing with military personnel or private citizens, Mr. McKinnie devotes his extensive legal knowledge and resources to achieving the positive outcomes our clients expect and deserve. Responsive, competent and always available to address your concerns and questions, Mr. McKinnie is an attorney you can trust. For more information about how McKinnie Law can best serve you and your family, you can contact our law firm to schedule a free initial consultation.', address:'119 1st Ave. S. Ste. 310, Seattle, WA 98104', services:'', avgrating:'', phone:'206-395-3414', businessphoto:'https://wldimages.findlaw.com/images/5021618/5021618_1.jpg', typeID:3},
    {id: 10, companyname:'Eckstrom Law Firm, PLLC', providerbio:'I am attorney Melissa Eckstrom. I earned my J.D. from Seattle University School of Law in 2014 and passed the Washington State Bar exam the same year. Since then, I have devoted my practice to helping people facing a wide range of legal issues. I take on all types of family law cases, including divorce, custody, parenting plan modifications, domestic violence, and post-divorce modification. In my criminal practice, I focus on misdemeanors and gross misdemeanors, including hit and runs, driving while license is suspended in the second or third degrees, drug charges, and DUIs. I also represent people who wish to fight traffic infractions. In all of my areas of practice, there is one constant. I am fully invested in helping my clients in achieving their goals and moving forward with their lives. Through skill and determination, I have been able to achieve positive outcomes for my clients time and again. My law firm, Eckstrom Law Firm, PLLC, was selected to be a part of Seattle University School of Laws Low Bono Incubator Program, which helps new lawyers establish their practices. This program, along with the relationships I have established with other lawyers in the area, has provided invaluable support to my law firm. I want to make hiring my law firm as easy as possible for my clients. I am available 24 hours a day, seven days a week. I also accept credit cards, and in some situations I am willing to accept payment plans. I offer a free 20 minute consultation to discuss your situation.', address:'119 1st Ave. S. Seattle, WA 98104- 3416', services:'', avgrating:'', phone:'425-366-8422', businessphoto:'https://wldimages.findlaw.com/images/4899666/4899666_1.jpg', typeID:3},
    {id: 11, companyname:'Law Office of Amy Muth, PLLC', providerbio:'Attorney Amy Muth represents individuals in criminal investigations, trials, appeals, and post-conviction matters in Washington state and federal courts. A recognized leader in defending Washington sexual assault cases, Ms. Muth has garnered awards and recognition from the Washington Association of Criminal Defense Lawyers (WACDL), Washington Defender Association (WDA), and Washington Law & Politics. Additionally, she serves as an expert witness and consultant for Innocence Project Northwest in sexual assault cases. Because of her experience, Ms. Muth is frequently invited to conduct trainings for members of local, state, and national criminal defense organizations, and most recently was a featured speaker for the National Association of Criminal Defense Lawyers sex crimes CLE program in New Orleans. She also regularly testifies in the Washington State Legislature on criminal legislation, and writes articles and amicus briefs for WACDL and WDA on sex crime issues.', address:'1000 Second Avenue, Suite 3140, Seattle, WA 98104- 3213', services:'', avgrating:'', phone:'206-682-3053', businessphoto:'https://wldimages.findlaw.com/images/4783239/4783239_1.jpg', typeID:3},
    {id: 12, companyname:'Phillip L. Weinberg, Attorney At Law', providerbio:'I am criminal defense attorney Phillip L. Weinberg. With locations in Bellevue and Everett, I have provided exceptional legal representation for people throughout Washington facing serious criminal accusations for more than 26 years. Whether you have been charged with DUI, assault, domestic violence or some other allegation, I recognize how much is at stake in your case, and I will work tirelessly on your behalf to protect your rights and preserve your freedom. I bring decades of experience, an arsenal of creative tactics and shrewd judgment to every case. Dismissal is always the first goal I strive for. While an aggressive approach may be necessary, depending on the circumstances of your case, it is not always the best approach. A creatively executed defense or skillful negotiation can sometimes achieve superior results. When the situation calls for it, however, I am a fierce advocate in trial and will fight to the bitter end when it is in your best interests. Above all, I am a results-oriented criminal defense lawyer and litigator, and will seek the best possible outcome under the circumstances of your case and situation, whether it is a plea agreement that reduces the potential consequences, a dismissal or acquittal at trial. I have found that the key to success in any criminal defense case is thorough preparation. The government has the burden of proving every part of its case beyond a reasonable doubt. When your defense lawyer conducts a complete investigation and fully analyzes the facts and legal issues in your case, this burden becomes much heavier for the government to prove. You can be confident in my abilities and intensive efforts at each stage of your case. Contact my office now to schedule your free initial consultation and case evaluation.', address:'601 108th Avenue NE, Suite 1900, Bellevue, WA 98004', services:'', avgrating:'', phone:'425-367-1122', businessphoto:'https://wldimages.findlaw.com/thumbnail-68/1893346/1893346_1.jpg', typeID:3},
    {id: 13, companyname:'2020 Financial Planning LLC', providerbio:'Because being paid exclusively by our clients assures them that we are sitting on the same side of the table as them: Their side. While there are many ethical financial advisors who sell financial products, 2020 Financial Planning’s charter as a Fee-Only Financial Planner cleanly allows for total objectivity when recommending products and investments that will meet our client’s goals. Being a Fee-Only Financial Planner frees 2020 Financial Planning to objectively analyze the broadest range of investment choices for recommendation and doesn’t limit us to just one family of funds or products. Get in touch to discover what its like to have financial planning thats clear and on your terms.', address:'1700 7th Avenue, Suite 2100, PMB 260 Seattle, WA 98101', services:'', avgrating:'', phone:'(206) 357-8400', businessphoto:'http://www.2020financialplanningllc.com/wp-content/uploads/2016/05/Final-logo-150-tall.jpg', typeID:4},
    {id: 14, companyname:'Avier Wealth Advisors', providerbio:'At Avier Wealth Advisors, we place great value in the quality of the relationship we have with you. We want you to be confident that our only incentive is to do what is in your best interest. We adhere at all times to the highest fiduciary standard of care and strive to earn your trust through transparent processes and honest communication. Our fee-only compensation model means that we receive payment for our asset management services from only one source—you. Our clients value our open approach, and we value their continued loyalty.', address:'10655 NE 4th Street, Suite 508, Bellevue, WA 98004', services:'', avgrating:'', phone:'(425) 467-1011', businessphoto:'https://avieradvisors.com/wp-content/themes/clean-theme/images/avier-logo.svg', typeID:4},
    {id: 15, companyname:'Madrona Financial Services, LLC', providerbio:'Madrona Financial Services was founded in 1999 to provide financial expertise that is thorough, transparent and unique, while acting in their clients’ best interest as a fiduciary. This fiduciary capacity is not new to our CEO and Chief Investment Officer, Brian Evans, as he has met this standard since beginning his professional career as a CPA more than 30 years ago. Today, Madrona and our wholly-owned sister company Bauer Evans, Inc. P.S. have grown to include over 30 support staff working together to help you invest in your future, simplify your life and prosper. This is The Madrona Way and this is why we exist. The process behind the Madrona Way begins with our proprietary global asset allocation strategy, which actively evaluates securities based on anticipated profit per dollar invested. By analyzing and researching vast amounts of reports and data, including the consensus estimates of approximately 670 analysts, we create sophisticated and diversified portfolios that factor in debt, price-to-earnings ratios and expected growth of earnings, which we use to advise you how to best achieve your financial goals.', address:'2911 Bond St Suite 200, Everett, WA 98201', services:'', avgrating:'', phone:'(425) 212-3777', businessphoto:'https://madronafinancial.com/wp-content/uploads/2015/08/Madrona_FinancialServicesLogo.png', typeID:4},
    {id: 16, companyname:'S.R. Schill & Associates', providerbio:'Since 1987, S. R. Schill & Associates has been helping our clients realize their dreams-- dreams of financial security, sending their children to college and enjoying their retirement. We are a family-run business that provides a full range of wealth management services for individuals and families while placing an emphasis on one-on-one relationships. We make it possible for everyone to have a financial plan prepared by a fee-only fiduciary.', address:'2448 76th Ave SE, Suite 107, Mercer Island, WA 98040', services:'', avgrating:'', phone:'(800) 877-0168', businessphoto:'https://www.srschill.com/sites/default/files/users/srschill/SCSchill%20Horiz%20Logo%20WEB.png?1547067610', typeID:4},
    {id: 17, companyname:'Sound Mental Health', providerbio:'Founded in 1966, Sound is one of King County’s most comprehensive providers of quality mental health and addiction treatment services, supporting our area’s most vulnerable populations. A central tenet of our work is Reaching Recovery, an evidence-based clinical care model that promotes high levels of client engagement, improves health care outcomes and enables providers to better measure a client’s recovery. Our award-winning and innovative programs help our clients reach lives of recovery, reconnect with their families and re-engage with their communities. As a health care organization, we work with primary care and other partners to support the holistic well-being of our clients. Informed by Reaching Recovery, our programs serve thousands of men, women and children, from youth to older adults, helping them reconnect with their families and loved ones and re-engage with their communities.', address:'6400 Southcenter Blvd, Tukwila, WA 98188', services:'', avgrating:'', phone:'(206)901-2000', businessphoto:'https://www.sound.health/wp-content/themes/smh/img/smh-logo.png', typeID:5},
    {id: 18, companyname:'Valley Cities Counseling and Consultation', providerbio:'At Valley Cities Behavioral Health Care, we provide caring, compassionate treatment, recovery, and support services to people struggling with substance use and mental health challenges. Our skilled care team believes that our clients are in charge of their recovery and provides a judgement-free zone to develop the right treatment plan for their unique situation. Whether you are a child, young adult, adult, or veteran, we have a program ㅡ and a counselorㅡ for you. And we don’t stop there. Often our clients face additional challenges that get in the way of living their life to the fullest, so we provide housing programs, homeless outreach services, employment services, and social services for veterans and their families. Life challenges each of us at times – but we believe in the strength and resiliency of the human spirit. We believe in you.', address:'325 West Gowe St. Kent, WA 98032', services:'', avgrating:'', phone:'(253) 833-7444', businessphoto:'https://static1.squarespace.com/static/5a5e5db3f6576e754b43144c/t/5b1ad7221ae6cfcbab3b19f7/1549396820609/?format=1500w', typeID:5},
    {id: 19, companyname:'Pamela Woodroffe, LICSW, CDP, MAC', providerbio:'Are events from the past preventing you from experiencing the full potential of your life? Are you experiencing stress from life changes such as health challenges, loss of a loved one, career problems, parenting, empty nest, a recent move? Are you feeling disconnected from what really matters to you? Would you like to achieve a more balanced life? It can help to enlist an insightful, respectful therapist who can support your quest to reflect and heal in a safe, comfortable setting. I especially enjoy helping health professionals identify creative strategies for their own self-care. I specialize in supportive strengths-based therapy of individual adults who are ready to make positive changes. I believe our deepest struggles often hold the seeds of our greatest gift. My role is to draw forth your inner wisdom. For 12 years I have helped clients achieve happy, successful lives. My approach is holistic and includes Mindfulness, EMDR, Cognitive Behavioral Therapy, Motivational Enhancement Therapy, and Journaling. My practice is located in North Seattle and has plenty of free parking.', address:'Lake City Professional Center, 2611 NE 125th St, Suite 206, Seattle, Washington 98125', services:'', avgrating:'', phone:'(206) 966-6915', businessphoto:'https://cdn2.sussexdirectories.com/rms/rms_photos/sized/81/36/243681-519695-3_320x400.jpg?pu=1488074315', typeID:5},
    {id: 20, companyname:'John Schwab, PHD', providerbio:'I am a Licensed Clinical Psychologist treating individuals, couples and families with a wide range of concerns including depression, anxiety, relationship issues, sexual concerns and career challenges. I work to establish a place where people can disclose and pursue their most personal challenges openly and truthfully. Therapy is a kind of second chance, an opportunity to correct behaviors that may have been necessary in the past.My orientation is centrally interpersonal; attachment theory is extremely important to my practice. Im psychodynamic but careful to not over-emphasize the past. I utilize cognitive-behavioral techniques. I explore the effects of relationship dynamics on emotion, thought and mood. I collaborate with other professionals when medication is appropriate.', address:'151 Finch Place, Suite C, Bainbridge Island, Washington 98110', services:'', avgrating:'', phone:'206-922-8244', businessphoto:'https://cdn4.sussexdirectories.com/rms/rms_photos/sized/26/91/39126_1_120x150.jpg?pu=0', typeID:5},
    {id: 21, companyname:'Transform 180 Training', providerbio:'We believe that transparency and sincerity build trust. We believe in having strong moral principles based on honesty and applying those principles religiously.', address:' 2517 6th Ave, Seattle, WA 98121', services:'', avgrating:'', phone:'206.755.5004', businessphoto:'https://lifefitness.com/sites/g/files/dtv111/f/image/cta_image/LifeFitness-HomeFitness-Catalog-635x416.jpg', typeID:6},
    {id: 22, companyname:'Flex Training Gym', providerbio:'We welcome all levels of fitness. We offer a beginner’s program, extreme weight loss program, strength and conditioning, core training, circuit training, sport-specific training, bodybuilding, and pre-competition training.', address:'1920 E Madison St, Seattle, WA 98122', services:'', avgrating:'', phone:'(206) 228-6610', businessphoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHKCbghYFCgtx7K_nX3RRECpkGeh_VXzUs4ZRsswGasFMcrRbDw', typeID:6},
    {id: 23, companyname:'B-Fit Personal Training', providerbio:'My name is Peter Feysa and welcome to B-Fit personal fitness training. My fitness program is designed specifically for YOU, to help sculpt your body and revitalize your life. I utilize all the components of fitness and provide you with the most complete and comprehensive fitness program available in Seattle.', address:' 9333, 3601 Greenwood Ave N, Seattle, WA 98103', services:'', avgrating:'', phone:' (206) 914-9650', businessphoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEu8UFZfcNLgxrrzKr9nux8tf-VzNDyrpNkK5HuL35E2vDOG0n', typeID:6},
    {id: 24, companyname:'Edge Personal Training', providerbio:'EDGE Personal Training is a full service personal training studio located in Seattles Ballard neighborhood. All of our personal trainers are experienced, college educated and certified through either the NSCA or ACSM. At EDGE Personal Training, we realize that all people are different even if their goals are the same. Whether your goal is fat loss, muscular gain, rehabilitation or sport specific, our trainers will use their knowledge and expertise to customize a routine just for you!', address:'3000 NW Market St, Seattle, WA 98107', services:'', avgrating:'', phone:'(206) 782-1505', businessphoto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_xn23Vamu5InNtGuIV62gSnoemmHqHY8_Kf37o5ZCwKTwzgA', typeID:6}
  ])
  .then(() => {
    return knex.raw("SELECT setval('providers_id_seq', (SELECT MAX(id) FROM providers));")
})
}