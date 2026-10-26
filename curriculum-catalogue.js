/* Editorial planning groups, not a verbatim or independently certified statutory-objective inventory. */
const CURRICULUM_SOURCES={
maths:{title:'DfE mathematics programme',url:'https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study/national-curriculum-in-england-mathematics-programmes-of-study',checked:'2026-10-22'},
english:{title:'DfE English programme and appendices',url:'https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study/national-curriculum-in-england-english-programmes-of-study',checked:'2026-10-22'},
science:{title:'DfE science programme',url:'https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study',checked:'2026-10-22'},
framework:{title:'DfE curriculum framework',url:'https://www.gov.uk/government/publications/national-curriculum-in-england-framework-for-key-stages-1-to-4/the-national-curriculum-in-england-framework-for-key-stages-1-to-4',checked:'2026-10-22'}
};
const CURRICULUM_CATALOGUE={version:'2026.10.22-planning-1',inventoryIndependentlyVerified:false,schoolSequenceConfirmed:false,groups:[]};
function CG(subject,years,scope,source,rows){rows.forEach((r,i)=>CURRICULUM_CATALOGUE.groups.push({id:source+'-'+subject.toLowerCase().replace(/[^a-z]/g,'')+'-'+years.join('')+'-'+(i+1),subject,years,scope,source,label:r[0],lessons:r[1],depth:r[1].length?'partial':'missing',suggestedTerm:Math.min(6,1+Math.floor(i*6/rows.length))}))}
CG('Mathematics',[3],'Year-specific planning groups','maths',[
['Three-digit numbers',['place3','count3_full']],['Mental and written calculations',['addition','mental3_full']],['Tables and scaling',['times3','product3_full']],['Two-digit multiplication',['product3_full']],['Tenths',['tenths3_full']],['Fraction relationships',['fractions','fraction3_full']],['Length, mass and capacity',['measure']],['Perimeter',['perimeter3_full']],['Money',['money']],['Clocks and calendars',['time','calendar3_full']],['Shapes, turns and lines',['angles','shape3_full']],['Charts and comparisons',['statistics']]]);
CG('Mathematics',[4],'Year-specific planning groups','maths',[
['Four-digit numbers',['place4']],['Calculation and checking',['addition']],['Tables and written methods',['times4','multiply']],['Fractions and decimals',['fractions','fractioncalc','decimals']],['Measures and conversions',['measure']],['Perimeter and area',['area']],['Money and time',['money','time']],['Shapes and symmetry',['angles','symmetry_more']],['Coordinates and movement',['coordinates_more']],['Data and graphs',['statistics']]]);
CG('Mathematics',[5],'Year-specific planning groups','maths',[
['Numbers to a million',['place5']],['Written calculations',['addition','multiply']],['Factors, multiples and primes',[]],['Fractions and mixed numbers',['fractioncalc']],['Decimals and percentages',['decimals','percent']],['Measures and conversions',['measure','time']],['Area and volume',['area']],['Angles and solids',['angles']],['Reflection and translation',['symmetry_more','coordinates_more']],['Tables and line graphs',['statistics']]]);
CG('Mathematics',[6],'Year-specific planning groups','maths',[
['Numbers to ten million',['place6']],['Four operations',['addition','multiply','order']],['Fractions, decimals and percentages',['fractioncalc','decimals','percent']],['Ratio and proportion',['ratio']],['Algebra',['algebra']],['Measures and conversions',['measure']],['Area and volume',['area']],['Shape and angle reasoning',['angles']],['Four-quadrant coordinates',[]],['Charts and averages',['statistics']]]);
CG('English',[3,4],'Shared Years 3–4 block; school allocates the year','english',[
['Word reading and vocabulary',['spelling','reading']],['Exception words and spelling appendix',['transcription3_full']],['Reading range and whole books',[]],['Inference and prediction',['reading','seedstory']],['Themes and conventions',['seedstory']],['Poetry and drama',['poetry_more','speaking3_full']],['Reference reading',['nonfiction_more']],['Handwriting and transcription',['transcription3_full']],['Planning, drafting and editing',['paragraph']],['Sentences and cohesion',['conjunction','tense']],['Speech and possession',['speech_more','apostrophe']],['Year-specific grammar appendix',['wordclass','punctuation']]]);
CG('English',[5,6],'Shared Years 5–6 block; school allocates the year','english',[
['Advanced word reading',['spelling']],['Spelling appendix progression',[]],['Wide reading and recommendations',[]],['Inference and textual evidence',['reading','libraryreport']],['Theme and text comparison',[]],['Performance and discussion',['poetry_more']],['Fact, opinion and language effects',['libraryreport','persuasion_more']],['Research and summarising',['nonfiction_more']],['Writing for audience',['paragraph','persuasion_more']],['Editing and cohesive structure',['paragraph']],['Formal grammar and punctuation',['relative']],['Fluent handwriting',[]]]);
CG('English',[3,4,5,6],'Progressive spoken-language practice across KS2','english',[
['Listening, explaining and discussion',['speaking3_full','reading']],['Presentation, debate and drama',['poetry_more','persuasion_more']]]);
CG('Science',[3],'Year-specific topics; enquiry embedded in activities','science',[
['Plant functions and growth',['plants','water3_full']],['Nutrition and skeletons',['skeleton']],['Rocks, fossils and soils',['rocks']],['Light and shadows',['light']],['Forces and magnets',['forces','magnet3_full']],['Practical enquiry and evidence',['science_enquiry_more']]]);
CG('Science',[4],'Year-specific topics; enquiry embedded in activities','science',[
['Habitats and classification',['habitats']],['Digestion, teeth and food chains',['digestion']],['States and water cycle',['states']],['Sound',['sound']],['Electricity',['electricity']],['Practical enquiry and evidence',['science_enquiry_more']]]);
CG('Science',[5],'Year-specific topics; enquiry embedded in activities','science',[
['Life cycles and reproduction',['habitats']],['Human development',[]],['Materials and changes',['materials']],['Earth and space',['space']],['Forces',['forces']],['Practical enquiry and evidence',['science_enquiry_more']]]);
CG('Science',[6],'Year-specific topics; enquiry embedded in activities','science',[
['Classification',['habitats']],['Circulation and healthy choices',['circulation']],['Evolution and inheritance',['evolution']],['Light',['light','light_year6_more']],['Electricity',['electricity','circuits_year6_more']],['Practical enquiry and evidence',['science_enquiry_more']]]);
CG('History',[3,4,5,6],'KS2 scope, not four identical annual courses; confirm school choices','framework',[
['Evidence and chronology',['history','history_change_more']],['Prehistoric Britain',['history_periods_more']],['Roman Britain',[]],['Anglo-Saxons and Vikings',[]],['Local history study',[]],['British theme beyond 1066',[]],['Ancient civilisation choice',[]],['Ancient Greece',[]],['Non-European society choice',[]]]);
CG('Geography',[3,4,5,6],'KS2 scope; school allocates regional studies and fieldwork','framework',[
['Places and regional comparisons',[]],['Location and global reference lines',[]],['Physical processes',['rivers_more','climate_more']],['Settlement, trade and resources',[]],['Maps, fieldwork and evidence',['geography']]]);
CG('Computing',[3,4,5,6],'KS2 scope; progressively harder practical projects needed','framework',[
['Programming, loops and decisions',['computing','computing_repeat_more']],['Variables and physical systems',[]],['Networks, internet and search',[]],['Creating and evaluating digital work',['computing_data_more']],['Online safety and reporting',['computing']]]);
CG('Art & Design',[3,4,5,6],'KS2 scope; school selects artists and projects','framework',[
['Sketchbook development',['art']],['Drawing and painting',['art','art_colour_more']],['Sculpture and other media',[]],['Artists and design contexts',[]],['Evaluating creative choices',['art_collage_more']]]);
CG('Design & Technology',[3,4,5,6],'KS2 scope; making requires age-appropriate adult support','framework',[
['User needs and evaluation',['dt']],['Structures and joining',['dt_structures_more']],['Textiles and mechanisms',[]],['Electrical and programmed products',[]],['Food and cooking',['dt_food_more']]]);
CG('Music',[3,4,5,6],'KS2 scope; a varied repertoire and practical performance needed','framework',[
['Voice and instruments',['music','music_pitch_more']],['Improvising and composing',['music_listening_more']],['Notation',[]],['Listening and musical history',[]],['Performance and evaluation',['music']]]);
CG('Physical Education',[3,4,5,6],'KS2 scope; school and qualified activity provision needed','framework',[
['Running, throwing and catching',['pe','pe_games_more']],['Team games and tactics',['pe_games_more']],['Gymnastics and dance',['pe_sequences_more']],['Outdoor challenges',[]],['Swimming and water safety',[]],['Evaluating movement',['pe']]]);
CG('Languages',[3,4,5,6],'KS2 scope; confirm the school’s actual foreign language','framework',[
['Listening and pronunciation',[]],['Conversation and vocabulary',['french','french_numbers_more','french_colours_more']],['Reading and cultural texts',[]],['Writing and grammar',[]]]);
CG('Religious Education',[3,4,5,6],'School’s agreed RE syllabus required; selected examples only','framework',[
['School-specific beliefs and practices',['re','re_community_more']],['Worldviews and respectful enquiry',['re_questions_more']],['Full local RE sequence',[]]]);
CG('PSHE / Relationships',[3,4,5,6],'School relationships/health sequence required; selected examples only','framework',[
['Friendship, feelings and help',['pshe']],['Online relationships and privacy',['pshe_online_more']],['Money choices',['pshe_choices_more']],['Full school health and relationships sequence',[]]]);
