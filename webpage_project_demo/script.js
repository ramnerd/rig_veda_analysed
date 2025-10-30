document.addEventListener('DOMContentLoaded', () => {

const lexiconData = [
{
    word: "Agni (अग्नि)",
    root: "√ag 'to move'",
    short_meaning: "The divine fire; priest of the gods and messenger to them.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The foremost ('agrī') deity of the sacrifice who acts as the divine priest (hotṛ) and messenger, carrying oblations from humans to the gods." },
        { source: "Stephanie Jamison (Western)", meaning: "The personification of the physical sacrificial fire, central to the Vedic ritual. His roles as priest and messenger are functional descriptions of the fire's role in the rite." },
        { source: "Aurobindo (Indian)", meaning: "The divine Will-Force or dynamic consciousness. Internally, Agni is the 'psychic fire,' the divine spark within that aspires for truth and light." }
    ]
},
{
    word: "Indra (इन्द्र)",
    root: "√ind 'to be powerful'",
    short_meaning: "The king of the gods; deity of thunder, storms, and battle.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The divine warrior king who slays the demon Vṛtra to release the celestial waters (clouds), thereby ensuring prosperity. He is the foremost recipient of Soma." },
        { source: "Max Müller (Western)", meaning: "A primary nature deity representing the atmospheric phenomena of thunderstorms and monsoons. The myth of slaying Vṛtra is a dramatic portrayal of the storm breaking the drought." },
        { source: "Aurobindo (Indian)", meaning: "The illumined Mind, the divine mental power that descends to break down the limitations of the lower consciousness (Vṛtra) and bring down divine light." }
    ]
},
{
    word: "Hotṛ (होतृ)",
    root: "√hu 'to call, to sacrifice'",
    short_meaning: "The invoking priest in the Vedic ritual.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The chief priest whose function is to invoke the gods by reciting the hymns of the Rig Veda to invite them to the sacrifice." },
        { source: "Hermann Oldenberg (Western)", meaning: "A specific ritual functionary in the complex sacrificial system. The term is technical, referring to the priest responsible for the Rig Vedic recitations, with Agni being his divine counterpart." }
    ]
},
{
    word: "Adhvara (अध्वर)",
    root: "a-dhvara 'without hurt'",
    short_meaning: "The 'uninterrupted' or 'unharmed' sacrifice.",
    commentaries: [
        { source: "Yāska (Indian)", meaning: "A synonym for yajña (sacrifice), derived from 'na dhvara,' meaning that which is not injured or crooked. It emphasizes a sacrifice free from violence or destructive forces." },
        { source: "Joel Brereton (Western)", meaning: "An epithet for the sacrifice, likely highlighting its ideal state as a well-ordered, successful ritual journey that proceeds without interruption from malevolent forces or ritual error." }
    ]
},
{
    word: "Marutaḥ (मरुतः)",
    root: "Possibly √mṛ 'to die' or related to wind",
    short_meaning: "Storm deities; warrior companions of Indra.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A troop of storm gods, sons of Rudra, who are armed with lightning and thunder. They are Indra's allies in his battle against Vṛtra." },
        { source: "Ralph T.H. Griffith (Western)", meaning: "Personifications of the violent winds and storms. Their hymns are vivid descriptions of tempests, emphasizing their sound, movement, and destructive/creative power." },
        { source: "Aurobindo (Indian)", meaning: "The Life-Powers or thought-forces of the human mind. They are dynamic energies that, when properly directed, can break down mental barriers and support the illumined action of Indra." }
    ]
},
{
    word: "Satya (सत्य)",
    root: "sat 'being, existence'",
    short_meaning: "Truth, reality, that which truly is.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Truthfulness in speech and action, and the factual reality of things. It is often linked to Ṛta, the cosmic order, as its foundation." },
        { source: "Western Philology", meaning: "Derived from 'sat,' the present participle of 'to be.' It denotes 'what is real' or 'existent.' Its meaning is primarily ontological (related to being) before it becomes purely ethical." }
    ]
},
{
    word: "Brahmaṇaspati (ब्रह्मणस्पति)",
    root: "brahman 'prayer' + pati 'lord'",
    short_meaning: "Lord of Prayer; a divine sage and priest.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The deity who is the lord and protector of the sacred mantra (brahman). He is a divine priest who ensures the efficacy of the prayer and is often identified with Bṛhaspati." },
        { source: "Arthur Macdonell (Western)", meaning: "An abstract deity originating from the personification of the power of prayer. He represents the sacral speech of the ritual being elevated to divine status." }
    ]
},
{
    word: "Śunaḥśepa (शुनःशेप)",
    root: "śunaḥ 'dog's' + śepa 'tail'",
    short_meaning: "A rishi famously bound for sacrifice and rescued by the gods.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The name of a rishi who, when bound to the sacrificial post, prayed to various gods (especially Varuṇa) and was miraculously freed. The story exemplifies the power of prayer and divine grace." },
        { source: "Michael Witzel (Western)", meaning: "A legendary narrative, possibly reflecting ancient human sacrifice rituals or their substitution. The name itself is peculiar and likely symbolic, forming the core of a foundational Vedic legend about divine intervention." }
    ]
},
{
    word: "Pūṣan (पूषन्)",
    root: "√pūṣ 'to cause to thrive, nourish'",
    short_meaning: "A pastoral solar deity, guardian of paths and flocks.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The nourisher, who protects livestock, finds lost cattle, and ensures safety on roads. He is a benevolent deity associated with prosperity and safe travel." },
        { source: "Western Scholarship", meaning: "A solar deity connected with pastoral life. His role as a guardian of paths reflects the sun's journey across the sky, which guides travelers. He represents a key aspect of the Vedic pastoral economy." }
    ]
},
{
    word: "Dāna-stuti (दानस्तुति)",
    root: "dāna 'gift' + stuti 'praise'",
    short_meaning: "A hymn of praise for a gift, typically from a patron.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A type of hymn where the rishi praises the generosity of his patron king (yajamāna) who has gifted him cows, horses, or gold in return for his priestly services." },
        { source: "Stephanie Jamison (Western)", meaning: "A genre of hymn that provides crucial socio-economic insight into the Vedic world. These hymns are 'transactional,' documenting the relationship between the poet-priest and the warrior-patron, revealing the material basis of the sacrifice." }
    ]
},

// Words associated with Maṇḍala 2 (The Gṛtsamada Family Book)
{
    word: "Gṛtsamada (गृत्समद)",
    root: "gṛt 'skilled' + mada 'inspired'",
    short_meaning: "The rishi associated with Mandala 2.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A renowned rishi, head of a priestly family, to whom the hymns of the second Mandala are attributed. He is celebrated for his wisdom and poetic skill." },
        { source: "Western Historical View", meaning: "The eponymous ancestor of a clan of poets. The name likely represents a lineage or school of composition rather than a single historical individual responsible for all the hymns." }
    ]
},
{
    word: "Rudra (रुद्र)",
    root: "√rud 'to howl, to roar' or 'to be red'",
    short_meaning: "The fierce god of the storm, wind, and the wilderness.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The 'Howler' or 'Roarer,' a formidable deity associated with storms and disease. He is prayed to for mercy and for the health of family and cattle, asked to aim his arrows elsewhere." },
        { source: "Arthur Macdonell (Western)", meaning: "A minor but feared atmospheric deity in the Rig Veda, representing the destructive aspects of storms. He is seen as a precursor to the post-Vedic deity Shiva." }
    ]
},
{
    word: "Apāṁ Napāt (अपां नपात्)",
    root: "apām 'of waters' + napāt 'offspring'",
    short_meaning: "The 'Son of the Waters,' a form of Agni residing in water.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A specific form of Agni who exists within the celestial waters (clouds) as lightning. He is swift and shines without fuel, emerging from the waters." },
        { source: "Western Comparative Mythology", meaning: "An Indo-Iranian deity (cognate with Avestan Apąm Napāt) representing the 'fire in the water.' This figure is an ancient personification of the paradoxical energy (lightning, natural gas, or poetic inspiration) found within the waters." }
    ]
},
{
    word: "Dhī (धी)",
    root: "√dhyā 'to think, contemplate'",
    short_meaning: "Inspired thought, vision, intelligence, prayer.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Often refers to the action, the religious act or the prayer itself. A 'sudhī' is one who performs good actions or prayers." },
        { source: "Jan Gonda (Western)", meaning: "A central concept representing the 'visionary flash' or 'inspired thought' of the rishi. It's not just intellect, but a form of supranormal perception through which the hymns were 'seen'." }
    ]
},
{
    word: "Gharma (घर्म)",
    root: "√ghṛ 'to sprinkle, to be warm'",
    short_meaning: "A hot cauldron for milk offering; the offering itself.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The Mahāvīra pot, a sacred earthen vessel heated to high temperatures for the Pravargya rite, an offering of hot milk to the Aśvins." },
        { source: "Hermann Oldenberg (Western)", meaning: "A specific and ancient ritual implement and the associated ceremony. The rite is likely solar in nature, with the hot cauldron symbolizing the sun." }
    ]
},
{
    word: "Āditya (आदित्य)",
    root: "aditi 'boundlessness'",
    short_meaning: "Son of Aditi; a group of sovereign deities.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The sons of the goddess Aditi, including major deities like Varuṇa, Mitra, and Aryaman. They are upholders of Ṛta and cosmic morality." },
        { source: "Aurobindo (Indian)", meaning: "The powers of the infinite, pure consciousness (Aditi). They represent the eternal principles of Truth, Light, and Vastness that govern the higher planes of existence." }
    ]
},
{
    word: "Ratha (रथ)",
    root: "√ṛ 'to go'",
    short_meaning: "Chariot, vehicle of gods and warriors.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The physical, horse-drawn chariot used in battle and as a vehicle for the gods to attend the sacrifice. It is a symbol of power and speed." },
        { source: "Western Historical View", meaning: "A key piece of military technology of the Indo-Aryans, reflecting the realities of Bronze Age warfare. The hymns' detailed descriptions of chariots provide historical data on their construction and use." }
    ]
},
{
    word: "Vṛtrahan (वृत्रहन्)",
    root: "Vṛtra + han 'slayer'",
    short_meaning: "The slayer of Vṛtra, a primary epithet of Indra.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "He who killed the demon Vṛtra. This is Indra's most celebrated title, commemorating his central cosmic deed of liberating the waters." },
        { source: "Aurobindo (Indian)", meaning: "The force that destroys the inner 'obstructor' (Vṛtra). It represents the power of the illumined mind to break through the coverings of ignorance and release streams of divine consciousness." }
    ]
},
{
    word: "Śukra (शुक्र)",
    root: "√śuc 'to shine, glow'",
    short_meaning: "Bright, brilliant, pure; often refers to Soma.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "An adjective meaning 'bright' or 'resplendent,' frequently used to describe the Soma juice, Agni's flames, or the rays of the dawn." },
        { source: "Western Philology", meaning: "A common Indo-European root for 'bright' or 'white.' Its application to Soma highlights the visual appearance of the filtered juice, connecting the ritual to fundamental sensory experiences." }
    ]
},
{
    word: "Sūnṛtā (सूनृता)",
    root: "su 'good' + nṛta 'dance, activity'",
    short_meaning: "Bounteousness, gladness, joyful truth.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Pleasant and true speech (priyā ca satyā ca vāk). Also personified as a goddess of bounty and gladness who brings rewards." },
        { source: "Jan Gonda (Western)", meaning: "A complex term encompassing concepts of 'bounty,' 'vitality,' and 'joyful energy.' It represents the positive, life-affirming force that is a major goal of the Vedic prayer and ritual." }
    ]
},

// Words associated with Maṇḍala 3 (The Viśvāmitra Family & Gāyatrī)
{
    word: "Viśvāmitra (विश्वामित्र)",
    root: "viśva 'all' + mitra 'friend'",
    short_meaning: "Friend of all; the rishi of Mandala 3.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A great rishi, famously born a kṣatriya who became a brahmarṣi through intense tapas. He is the seer of the Gāyatrī mantra and represents the power of human will to achieve spiritual status." },
        { source: "Western Historical View", meaning: "The head of the Viśvāmitra clan, rivals of the Vasiṣṭha clan. His hymns, particularly the river hymn (3.33), may reflect historical events like the migration of the Bharata tribe." }
    ]
},
{
    word: "Gāyatrī (गायत्री)",
    root: "√gai 'to sing'",
    short_meaning: "A sacred Vedic meter; the famous mantra RV 3.62.10.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A poetic meter of 24 syllables (3x8). The mantra itself is a prayer to Savitṛ to stimulate our inspired thoughts (dhiyaḥ)." },
        { source: "Modern Hindu Tradition", meaning: "The most sacred mantra of the Veda, personified as a goddess. It is considered the essence of the Vedas and a prayer for universal spiritual illumination." }
    ]
},
{
    word: "Savitṛ (सवितृ)",
    root: "√sū 'to impel, stimulate'",
    short_meaning: "The Impeller; a solar deity of inspiration.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The aspect of the sun before it rises, who impels all creatures to their tasks. He is the deity invoked in the Gāyatrī mantra to stimulate our intelligence." },
        { source: "Max Müller (Western)", meaning: "A distinct solar deity from Sūrya, representing the abstract, dynamic, and life-giving power of the sun, rather than just the physical orb." },
        { source: "Aurobindo (Indian)", meaning: "The Divine Creator and the source of all inspiration. He represents the highest truth-light of the supermind which impels the human being towards spiritual transformation." }
    ]
},
{
    word: "Bhargaḥ (भर्गः)",
    root: "√bhrāj 'to shine'",
    short_meaning: "Effulgence, radiance, splendor.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The divine radiance or luster of the god Savitṛ, which destroys sin. We meditate on this light." },
        { source: "Dayananda Saraswati (Indian)", meaning: "The 'destroyer of sorrows' and 'bestower of bliss.' It is the pure, conscious, blissful nature of God himself, not just his light." }
    ]
},
{
    word: "Vipāś (विपाश्) / Śutudrī (शुतुद्री)",
    root: "Vipāś: 'unfettered'; Śutudrī: 'swiftly flowing'",
    short_meaning: "The Beas and Sutlej rivers, personified in hymn 3.33.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Two personified rivers who converse with the rishi Viśvāmitra, who persuades them to lower their waters so his tribe, the Bharatas, can cross." },
        { source: "Ralph T.H. Griffith (Western)", meaning: "A remarkable hymn that likely commemorates a historical event – the crossing of these two major rivers in the Punjab by the Indo-Aryans during their eastward migration." }
    ]
},
{
    word: "Kratu (क्रतु)",
    root: "√kṛ 'to do, make'",
    short_meaning: "Mental power, intelligence, determination, sacrificial plan.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Refers to both wisdom (prajñā) and action/work (karma), specifically the plan or intelligence behind the performance of a sacrifice." },
        { source: "Aurobindo (Indian)", meaning: "The divine will-in-action or effective power of consciousness. It is the determination and intelligence that executes the divine work, often associated with Agni." }
    ]
},
{
    word: "Yūpa (यूप)",
    root: "√yu 'to bind, fasten'",
    short_meaning: "The sacrificial post to which the animal victim is tied.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The consecrated wooden post, often addressed as a deity itself (Vanaspati), that is a central element of the animal sacrifice." },
        { source: "Mircea Eliade (Western)", meaning: "A symbolic representation of the *Axis Mundi* or Cosmic Tree, connecting the Earth to the Heavens. The sacrifice at the post is a ritual to regenerate cosmic order." }
    ]
},
{
    word: "Jamadagni (जमदग्नि)",
    root: "jamad 'consuming' + agni 'fire'",
    short_meaning: "A famous rishi, one of the 'seven sages'.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A great brahmin sage, father of Paraśurāma, and a seer of Vedic hymns. His name, 'consuming fire,' reflects his powerful tapas." },
        { source: "Western Scholarship", meaning: "The ancestral name of a priestly family. The legends associated with him in later texts (like the Purāṇas) are post-Vedic developments that elaborate on the minimal details found in the Rig Veda." }
    ]
},
{
    word: "Indrāgnī (इन्द्राग्नी)",
    root: "Indra + Agni",
    short_meaning: "A dual divinity combining Indra and Agni.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A joint invocation of the two most important Vedic gods, Indra and Agni, combining their respective powers of martial strength and priestly wisdom." },
        { source: "Arthur Macdonell (Western)", meaning: "An example of a 'dual divinity,' a common feature in the Rig Veda. This pairing synthetically combines the attributes of the warrior-king and the priest-god, representing the complete power of the Vedic pantheon." }
    ]
},
{
    word: "Bharata (भरत)",
    root: "√bhṛ 'to bear, maintain'",
    short_meaning: "Name of a prominent Vedic tribe.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The name of the tribe led by King Sudās, for whom Viśvāmitra and later Vasiṣṭha served as priests. They are the victors in the 'Battle of the Ten Kings'." },
        { source: "Michael Witzel (Western)", meaning: "A specific Indo-Aryan tribe whose historical movements and conflicts are partly documented in the Rig Veda. Their eventual dominance gave their name to the entire land, 'Bhārata'." }
    ]
},
// Words associated with Maṇḍala 4 (The Vāmadeva Family Book)
{
    word: "Vāmadeva (वामदेव)",
    root: "vāma 'lovely, beautiful' + deva 'god'",
    short_meaning: "The rishi of Mandala 4, known for mystical hymns.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A rishi who possessed knowledge of his past lives even while in the womb (RV 4.27), famously declaring 'I was Manu, and the Sun...' (RV 4.26). This illustrates the concept of jñāna and self-realization." },
        { source: "Western Scholarship", meaning: "The ancestral seer of the Vāmadeva clan. The hymns attributed to him contain some of the most philosophically intriguing passages of the Rig Veda, suggesting early speculative thought." }
    ]
},
{
    word: "Ṛbhu (ऋभु)",
    root: "√rabh 'to grasp'",
    short_meaning: "Divine artisans, originally human, who attained immortality.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Three mortal brothers (Ṛbhu, Vāja, Vibhvan) who, through their incredible skill in craftsmanship (like making Indra's horses and a cup that multiplies), performed divine deeds and earned immortality and a share in the sacrifice." },
        { source: "Ralph T.H. Griffith (Western)", meaning: "Likely representing elfin or gnome-like figures associated with seasonal or solar phenomena. Their deification reflects the high value placed on craftsmanship and creative skill in the Vedic culture." }
    ]
},
{
    word: "Dadhikrā (दधिक्रा)",
    root: "dadhi 'curdled milk' + √krā 'to stride'",
    short_meaning: "A mythical, divine horse, a symbol of the morning sun.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A divine horse, swift as an eagle, invoked in the morning to grant victory and wealth. The name may refer to one who 'scatters' curdled milk as an offering." },
        { source: "Max Müller (Western)", meaning: "A personification of the rapidly moving morning sun. The name is interpreted as symbolizing the sun's swift course, and the hymns to him are morning prayers for a successful day." }
    ]
},
{
    word: "Kṣetrasya Pati (क्षेत्रस्य पति)",
    root: "kṣetra 'field' + pati 'lord'",
    short_meaning: "The Lord of the Field, a deity of agriculture.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A deity who presides over cultivated land, prayed to for 'sweet and honeyed' rain, bountiful crops, and the well-being of the farmer." },
        { source: "Western Scholarship", meaning: "A tutelary deity of the field, reflecting the growing importance of agriculture in Vedic society. Such deities are common in agrarian cultures, personifying the spirit of the land." }
    ]
},
{
    word: "Śyena (श्येन)",
    root: "Uncertain",
    short_meaning: "A hawk or eagle, famous for bringing Soma from heaven.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The divine eagle who bravely flew to heaven, past divine archers, to steal the Soma for mankind and the gods. This is a central myth of the Soma sacrifice." },
        { source: "Western Comparative Mythology", meaning: "A parallel to the Greek myth of Prometheus stealing fire, or the eagle of Zeus. It's an Indo-European trope of a heroic bird bringing a divine element from the celestial realm to the terrestrial." }
    ]
},
{
    word: "Añjas (अञ्जस्)",
    root: "√añj 'to anoint, make clear'",
    short_meaning: "Directly, straightaway, truly.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "An adverb meaning 'quickly' or 'truly.' For example, 'May the gods come quickly to the sacrifice'." },
        { source: "Aurobindo (Indian)", meaning: "Represents the straight path of truth, as opposed to the crooked path of falsehood (anṛta). It signifies a direct, unadulterated movement of consciousness towards the divine." }
    ]
},
{
    word: "Vājin (वाजिन्)",
    root: "vāja 'strength, prize, speed'",
    short_meaning: "A swift horse, a hero, a prize-winner.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Literally, a 'possessor of vāja (food or strength).' It refers to a strong, swift horse, especially a racehorse, and metaphorically to a heroic warrior or even the gods." },
        { source: "Joel Brereton (Western)", meaning: "A term central to the Vedic 'contest economy.' 'Vāja' is the prize or booty won in a race or battle. A 'vājin' is a contender for this prize, whether a horse in a race or a warrior in a raid." }
    ]
},
{
    word: "Trasadasyu (त्रसदस्यु)",
    root: "trasa 'trembling' + dasyu 'foe'",
    short_meaning: "'He who makes the Dasyus tremble,' a famous king.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A great king of the Pūru tribe, son of Purukutsa, whose name means he is a terror to the Dasyus (enemies). He is a model patron of the sacrifice." },
        { source: "Western Historical View", meaning: "A historical or semi-historical kingly figure whose name reflects the ongoing conflict between the Vedic Aryans and the indigenous 'Dasyu' population." }
    ]
},
{
    word: "Gṛha (गृह)",
    root: "√grah 'to grasp, hold'",
    short_meaning: "A house, home, dwelling place.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The physical house and household, the center of family life and the domestic fire (gārhapatya agni)." },
        { source: "Aurobindo (Indian)", meaning: "Symbolically, the 'house' can refer to the human body or the established state of consciousness. Building a 'house' for the gods means establishing a firm and ordered consciousness for the divine powers to dwell within." }
    ]
},
{
    word: "Mánas (मनस्)",
    root: "√man 'to think'",
    short_meaning: "The mind as an instrument of thought, will, and emotion.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The mind, the seat of thought and feeling. Prayers are often directed to purify the manas or direct it towards the gods." },
        { source: "Upanishadic Thought (Indian)", meaning: "The inner organ (antaḥkaraṇa), which is the faculty of thought, doubt, and desire. It is considered a subtle form of matter, distinct from the pure consciousness (cit) of the Ātman." }
    ]
},

// Words associated with Maṇḍala 5 (The Atri Family Book)
{
    word: "Atri (अत्रि)",
    root: "√ad 'to eat'",
    short_meaning: "'Devourer,' the rishi of Mandala 5.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A great rishi, one of the seven sages, who was famously rescued by the Aśvins from a fiery pit. He represents one who has 'devoured' suffering and darkness through his devotion." },
        { source: "Western Scholarship", meaning: "The eponymous ancestor of the Atri clan. The hymns of Mandala 5 show a distinct, systematic arrangement by deity, suggesting a more scholastic or organized priestly tradition." }
    ]
},
{
    word: "Viśvavārā (विश्ववारा)",
    root: "viśva 'all' + vāra 'treasure'",
    short_meaning: "'She who possesses all treasures,' a female rishi.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A female seer (ṛṣikā) from the Atri family, who composed a hymn to Agni (RV 5.28). Her presence demonstrates that women could be seers of the Veda." },
        { source: "Western Historical View", meaning: "Evidence of the participation of women in the composition of Vedic hymns. While rare, such figures challenge the notion of an exclusively male priestly class in the earliest Vedic period." }
    ]
},
{
    word: "Svarbhānu (स्वर्भानु)",
    root: "svar 'sun' + bhānu 'light'",
    short_meaning: "An asura who eclipses the sun.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "An asura who pierced the sun with darkness, causing an eclipse. The rishi Atri, through his prayers, was able to find the hidden sun and restore its light." },
        { source: "Western Naturalistic View", meaning: "A mythological explanation for a solar eclipse. The story elevates the rishi Atri to a figure with cosmic power, capable of reversing a terrifying natural event through ritual knowledge." }
    ]
},
{
    word: "Rākā (राका)",
    root: "√rā 'to give'",
    short_meaning: "A goddess of wealth and the full moon.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A divine female personifying the full moon day. She is invoked as a generous goddess who grants wealth, heroes, and easy childbirth." },
        { source: "Arthur Macdonell (Western)", meaning: "A minor goddess representing the personification of a specific, auspicious time in the lunar calendar. Her worship reflects the importance of lunar cycles in the Vedic ritual world." }
    ]
},
{
    word: "Sinīvālī (सिनीवाली)",
    root: "Uncertain",
    short_meaning: "A goddess of procreation and the new moon.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A goddess associated with the new moon day (or the day just before it). She is prayed to for granting children and for safe delivery." },
        { source: "Western Scholarship", meaning: "Along with Rākā, Gungū, and Kuhū, she is one of the personified goddesses of the phases of the moon, highlighting a detailed ritual attention to the lunar calendar, especially regarding procreation." }
    ]
},
{
    word: "Dyumnam (द्युम्नम्)",
    root: "√dyu 'to be bright'",
    short_meaning: "Splendor, glory, strength, wealth.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Often translated as 'wealth' (dhanam) or 'strength' (balam), but also carries the sense of luminous glory or fame that comes from divine favor." },
        { source: "Jan Gonda (Western)", meaning: "A key term representing 'lustrous-vital-power.' It is not just material wealth but a charismatic, shining strength and prestige that marks a successful Vedic hero." }
    ]
},
{
    word: "Aryaman (अर्यमन्)",
    root: "arya 'noble, stranger'",
    short_meaning: "A deity of social customs, contracts, and hospitality.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "One of the Ādityas, often invoked with Mitra and Varuṇa. He presides over social conventions, particularly those related to marriage and hospitality." },
        { source: "Émile Benveniste (Western)", meaning: "A crucial Indo-European social concept representing the abstract principle of 'being an Ārya,' which includes the duties of hospitality and maintaining the social fabric of the community. He is the deification of this principle." }
    ]
},
{
    word: "Tryambaka (त्र्यम्बक)",
    root: "tri 'three' + ambaka 'eyes'",
    short_meaning: "'Three-eyed one,' an epithet of Rudra.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "An epithet of Rudra, interpreted later as 'he who has three eyes' (the sun, moon, and fire). In the Veda, it might also mean 'having three mothers,' though the meaning is debated." },
        { source: "Western Scholarship", meaning: "A famous epithet of Rudra, found in the Mahā-mṛtyuñjaya mantra (though that mantra is primarily in the Yajur Veda, the name appears in RV 7.59.12). Its origin is obscure, but it became central to the later iconography of Shiva." }
    ]
},
{
    word: "Parjanya (पर्जन्य)",
    root: "Uncertain",
    short_meaning: "The personification of the rain cloud.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The god of rain, who thunders and roars, fertilizing the earth with his downpour. He is the divine 'bull' who impregnates the plants." },
        { source: "Max Müller (Western)", meaning: "A clear example of a nature deity, the personification of the rain-cloud, often likened to the Lithuanian thunder god Perkūnas, showing a common Indo-European root." }
    ]
},
{
    word: "Śyāvāśva (श्यावाश्व)",
    root: "śyāva 'dark brown' + aśva 'horse'",
    short_meaning: "'He of the dark horse,' a rishi of the Atri family.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A rishi of the Atri lineage who composed several hymns in Mandala 5. His name, like many rishi names, is patronymic or descriptive." },
        { source: "Western Scholarship", meaning: "The name of a Vedic poet. The hymns attributed to him are valuable for their linguistic and cultural content, providing insight into the poetic conventions of his time." }
    ]
},
// Words associated with Maṇḍala 6 (The Bharadvāja Family Book)
{
    word: "Bharadvāja (भरद्वाज)",
    root: "bharad 'bringing' + vāja 'prize/strength'",
    short_meaning: "'Bringer of the prize,' the rishi of Mandala 6.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A great sage, father of Droṇācārya in the Mahābhārata, and the ancestral seer of the Bharadvāja clan, responsible for Mandala 6." },
        { source: "Western Historical View", meaning: "The eponymous head of a prominent priestly family. Mandala 6, attributed to this clan, has a strong focus on Agni and Indra and contains detailed dāna-stutis, suggesting their close relationship with powerful patrons." }
    ]
},
{
    word: "Sarasvatī (सरस्वती)",
    root: "saras 'pool, lake' + vatī 'possessing'",
    short_meaning: "A sacred river and the goddess of inspiration and speech.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Primarily, a mighty, physical river that flows from the mountains to the sea, on whose banks sacrifices are performed. She is also a goddess who bestows intelligence and inspiration." },
        { source: "Ralph T.H. Griffith (Western)", meaning: "Initially the deification of a real river (often identified with the Ghaggar-Hakra in modern Pakistan/India) that was central to the early Vedic civilization. As the river dried up, her character became purely mythological and abstract." },
        { source: "Aurobindo (Indian)", meaning: "The divine current of Truth-consciousness (ṛta-cit) that flows down from the supermind. She represents divine inspiration, truth-audition (śruti), and the very stream of creative consciousness." }
    ]
},
{
    word: "Paṇi (पणि)",
    root: "√paṇ 'to barter, bet'",
    short_meaning: "A wealthy merchant or hoarder; a class of demonic beings.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A class of rich but miserly demons or people who do not perform sacrifices and who steal the cows of the Angirasas. Indra and Saramā are sent to retrieve the stolen wealth." },
        { source: "Western Socio-economic View", meaning: "Possibly a reference to a non-Vedic, indigenous merchant class who were rivals of the Vedic pastoralists. The conflict over 'cows' could be a mythological retelling of actual cattle raids." },
        { source: "Aurobindo (Indian)", meaning: "Symbolize the dark powers of the physical senses that 'hoard' divine light (represented by cows) and refuse to offer it up to the higher consciousness. They are traffickers in sense-experience, not truth." }
    ]
},
{
    word: "Go (गो)",
    root: "√gam 'to go' (disputed)",
    short_meaning: "Cow; also light, ray, earth, speech.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Most often means a literal cow, the primary form of wealth for the Vedic people. In other contexts, based on Nirukta, it can mean ray of light, the earth, or speech." },
        { source: "Aurobindo (Indian)", meaning: "A key symbolic word. It almost always means 'Light' or 'Illumination.' The 'stolen cows' are the lost rays of divine consciousness hidden by the Paṇis. The 'dawn' is the recovery of these 'cows'." }
    ]
},
{
    word: "Divodāsa (दिवोदास)",
    root: "divaḥ 'of heaven' + dāsa 'servant'",
    short_meaning: "'Servant of Heaven,' a famous king and patron.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A celebrated king of the Bharata tribe, father of Sudās, known for his generosity to his priests (the Bharadvājas) and his victories over the Dāsas, aided by Indra." },
        { source: "Western Historical View", meaning: "A significant historical king whose reign likely represents an important phase in the expansion of Aryan influence. The hymns mentioning him provide semi-historical accounts of tribal conflicts." }
    ]
},
{
    word: "Garga (गर्ग)",
    root: "Uncertain, possibly onomatopoeic",
    short_meaning: "A rishi of the Bharadvāja lineage.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A Vedic sage and composer of hymns within Mandala 6, belonging to the Bharadvāja gotra." },
        { source: "Western Scholarship", meaning: "The name associated with a specific poet or sub-clan within the larger Bharadvāja school of hymn composition." }
    ]
},
{
    word: "Dundubhi (दुन्दुभि)",
    root: "Onomatopoeic",
    short_meaning: "The war drum.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The physical drum used in battle to frighten enemies and inspire warriors. It is addressed as a deity, asked to roar like a lion and secure victory." },
        { source: "Western Anthropological View", meaning: "A classic example of a ritual object being deified. The sound of the drum is imbued with magical power, and the hymn to it (e.g., RV 6.47) is a form of war magic to ensure success in battle." }
    ]
},
{
    word: "Pathyā (पथ्या)",
    root: "pathin 'path'",
    short_meaning: "Deity of the Path; personified welfare.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A goddess who presides over paths, ensuring safe and auspicious journeys. She is often invoked alongside Svasti (Welfare) and Pūṣan." },
        { source: "Western Philology", meaning: "An abstract goddess personifying the 'path' itself. This shows a tendency in Vedic thought to deify not just natural phenomena but also important concepts and aspects of life." }
    ]
},
{
    word: "Ṛjiśvan (ऋजीश्वन्)",
    root: "ṛji 'straight, honest' + √śvi 'to swell'",
    short_meaning: "A king who was an ally of Indra.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A pious king who aided Indra in his battles against the Dasyus, particularly the demon Pipru, by preparing Soma for him." },
        { source: "Western Historical View", meaning: "A tribal chieftain whose alliance with the Indra-worshipping Aryans is recorded in mythological terms. Such stories may reflect the historical process of alliances between different groups." }
    ]
},
{
    word: "Vāstoṣpati (वास्तोष्पति)",
    root: "vāstoḥ 'of the dwelling' + pati 'lord'",
    short_meaning: "Lord of the Dwelling; guardian of the household.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A tutelary deity of the homestead, invoked to protect the house, its inhabitants, and livestock from harm and to grant prosperity." },
        { source: "Western Scholarship", meaning: "The deification of the 'genius loci' or spirit of the house, a common feature in many ancient religions. He represents the sacrality of the domestic space." }
    ]
},
// Words associated with Maṇḍala 7 (The Vasiṣṭha Family Book)
{
    word: "Vasiṣṭha (वसिष्ठ)",
    root: "vasu 'wealth, good' + iṣṭha 'most'",
    short_meaning: "'Most excellent' or 'wealthiest,' the rishi of Mandala 7.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A legendary brahmarṣi, one of the seven sages, and the priest of King Sudās. He represents the ideal brahmin, possessing immense spiritual power and wisdom. Famously rivaled Viśvāmitra." },
        { source: "Western Historical View", meaning: "The head of the Vasiṣṭha clan, a powerful and influential priestly family. Mandala 7 is their family book, and hymn 7.18 (Battle of Ten Kings) celebrates their patron's victory, cementing their high status." }
    ]
},
{
    word: "Dāśarājña (दाशराज्ञ)",
    root: "daśa 'ten' + rājña 'kings'",
    short_meaning: "The Battle of the Ten Kings, a key event in RV 7.18.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The great battle where King Sudās of the Bharatas, with Indra's help and Vasiṣṭha's prayers, defeated a confederacy of ten hostile kings on the banks of the Paruṣṇī river." },
        { source: "F. B. J. Kuiper (Western)", meaning: "A historical conflict between various Aryan and non-Aryan tribes, mythologized in the hymn. It represents a pivotal moment in the consolidation of power by the Bharata tribe in the Punjab." }
    ]
},
{
    word: "Sudās (सुदास्)",
    root: "su 'good' + dās 'servant, giver'",
    short_meaning: "'Good giver,' the victorious king in the Battle of Ten Kings.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A righteous and generous king who was the patron of Vasiṣṭha. His victory was a direct result of his piety and the power of his priest's prayers." },
        { source: "Western Historical View", meaning: "A powerful chieftain of the Bharata tribe. The hymns dedicated to him are historical sources that shed light on the political landscape and tribal warfare of the early Vedic period." }
    ]
},
{
    word: "Paruṣṇī (परुष्णी)",
    root: "paruṣa 'knotted, rough'",
    short_meaning: "The modern Ravi river, site of the Battle of Ten Kings.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The name of the river where Indra drowned the enemies of Sudās, securing his victory." },
        { source: "Western Geography", meaning: "Identified with the modern Ravi River in the Punjab. The hymn's description provides geographical clues about the location of this significant historical event." }
    ]
},
{
    word: "Āpaḥ (आपः)",
    root: "√āp 'to obtain, pervade'",
    short_meaning: "The Waters, personified as divine goddesses.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The waters, both terrestrial (rivers, rain) and celestial (in the clouds). They are addressed as goddesses who are mothers, purifying, and life-giving." },
        { source: "Aurobindo (Indian)", meaning: "Symbolize the currents of consciousness. The 'seven rivers' are the seven planes of consciousness that descend from the supermind. Vṛtra's obstruction of the waters is the blockage of these divine currents." }
    ]
},
{
    word: "Ahi (अहि)",
    root: "Uncertain",
    short_meaning: "Serpent, dragon; often refers to Vṛtra.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A serpent or dragon. It is a common name for the demon Vṛtra, the 'serpent of the drought' who lies upon the mountains holding back the waters." },
        { source: "Western Comparative Mythology", meaning: "The Vedic cognate for the chaos-serpent figure found in many mythologies (Greek Python, Norse Jörmungandr). The slaying of the 'Ahi' by a hero-god is a foundational myth." }
    ]
},
{
    word: "Maṇḍūka (मण्डूक)",
    root: "Uncertain",
    short_meaning: "A frog.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The famous Frog Hymn (7.103) is a charm to bring rain. The croaking of the frogs, likened to the chanting of priests, is thought to magically invoke the monsoon." },
        { source: "Western Anthropological View", meaning: "A fascinating example of sympathetic magic. The hymn imitates the sounds and behavior of frogs, which appear with the rains, in order to magically precipitate the rains themselves." }
    ]
},
{
    word: "Vrata (व्रत)",
    root: "√vṛ 'to choose, will'",
    short_meaning: "A vow, command, fixed ordinance of a god.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The divine law or ordinance established by the gods, especially Varuṇa. To follow the 'vrata' is to live in accordance with cosmic and moral law (Ṛta)." },
        { source: "Louis Renou (Western)", meaning: "A central concept denoting the specific 'sphere of competence' or 'fundamental decree' of a deity. Each god has their vrata, which defines their function in the cosmos. Humans must align with these divine ordinances." }
    ]
},
{
    word: "Pāśa (पाश)",
    root: "√paś 'to bind'",
    short_meaning: "A rope, noose, or fetter, especially of Varuṇa.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The noose with which the god Varuṇa binds those who transgress his laws (vrata). It is a symbol of his power as a moral governor." },
        { source: "Aurobindo (Indian)", meaning: "Symbolizes the bonds of sin, ignorance, and falsehood. To be freed from Varuṇa's pāśa is to be liberated into the vastness of the pure consciousness he represents." }
    ]
},
{
    word: "Anṛta (अनृत)",
    root: "an 'not' + ṛta 'truth/order'",
    short_meaning: "Untruth, falsehood, disorder; opposite of Ṛta.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Falsehood, both in speech (lying) and in action (sin). It is the transgression against the cosmic order and is punished by Varuṇa." },
        { source: "Stephanie Jamison (Western)", meaning: "The direct negation of ṛta. It represents not just a lie but the active force of cosmic and social disorder. The opposition between ṛta and anṛta is a fundamental structuring principle of Vedic thought." }
    ]
},
// Words associated with Maṇḍala 8 (A mixed collection, Kaṇva family)
{
    word: "Kaṇva (कण्व)",
    root: "Uncertain",
    short_meaning: "A prominent rishi family associated with Mandala 8.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "An ancient and highly respected rishi lineage. Mandala 8 is largely their family book and is notable for its unique metrical structures and hymns to the Aśvins." },
        { source: "Western Scholarship", meaning: "A major priestly clan. The linguistic and stylistic features of Mandala 8, such as the prevalence of the 'pragātha' meter, distinguish it as a distinct compositional school." }
    ]
},
{
    word: "Pragātha (प्रगाथ)",
    root: "pra 'forward' + √gai 'to sing'",
    short_meaning: "A specific strophic meter, common in Mandala 8.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A type of meter formed by combining a Bṛhatī (8+8+12+8 syllables) stanza with a Satobṛhatī (12+8+12+8 syllables) stanza, used for chanting." },
        { source: "Western Metrical Analysis", meaning: "A characteristic feature of the Kaṇva hymns in Mandala 8. Its strophic form, where two verses are combined and repeated, makes it suitable for liturgical use in the Soma sacrifice." }
    ]
},
{
    word: "Vālakhilya (वालखिल्य)",
    root: "vāla 'hair' + khilya 'barren land'",
    short_meaning: "A group of 11 supplementary hymns in Mandala 8.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A collection of hymns attributed to thumb-sized sages, considered by some traditions to be an appendix or later addition to the main Samhita." },
        { source: "Western Philology", meaning: "A set of hymns considered by most scholars to be a later interpolation into the text of the Rig Veda. Their language and content show signs of being composed later than the surrounding 'family book' hymns." }
    ]
},
{
    word: "Sobhari (सोभरि)",
    root: "su 'good' + √bhṛ 'to bear'",
    short_meaning: "A rishi of the Kaṇva lineage.",
    commentaries: [
        { source: "Traditional Indian View", meaning: "A sage of the Kaṇva family who authored several hymns in Mandala 8, praising Indra, the Maruts, and the Aśvins." },
        { source: "Western Scholarship", meaning: "A poet of the Kaṇva school. His hymns contribute to the body of work that defines the style and thematic focus of this particular priestly clan." }
    ]
},
{
    word: "Trita Āptya (त्रित आप्त्य)",
    root: "trita 'third' + āptya 'of the waters'",
    short_meaning: "'The Third one of the Waters,' a mysterious deity.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A deity who prepares the Soma in the celestial regions. In some hymns, he takes on sins that Indra wishes to discard. His story is often obscure." },
        { source: "Western Comparative Mythology", meaning: "An archaic Indo-European figure, 'The Third,' often appearing alongside 'The First' and 'The Second.' He may represent a hero from a more ancient mythological stratum that has been partially incorporated into the Vedic pantheon." }
    ]
},
{
    word: "Sarpa (सर्प)",
    root: "√sṛp 'to creep, glide'",
    short_meaning: "A serpent.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A snake or serpent. Also the name of a class of mythical beings, and the seer of hymn 10.189 is Sārparājñī, the Serpent Queen." },
        { source: "Western Anthropological View", meaning: "Serpents in the Veda, as in many cultures, hold a dual significance: they can represent malevolent forces (like Ahi/Vṛtra) or chthonic (earthly) wisdom and guardianship, as in the case of the Sārparājñī." }
    ]
},
{
    word: "Manu (मनु)",
    root: "√man 'to think'",
    short_meaning: "Man, mankind's progenitor, the first sacrificer.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The first man and the father of the human race. He is considered the first to institute the sacrifice, establishing the model for all future human worship." },
        { source: "Western Comparative Mythology", meaning: "Cognate with Germanic 'Mannus,' the mythical ancestor of humanity. He represents the archetypal 'Man' and 'Thinker,' establishing the cultural and religious norms for his descendants." }
    ]
},
{
    word: "Apālā (अपाला)",
    root: "a 'not' + pāla 'protector'",
    short_meaning: "A female seer mentioned in Mandala 8.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A woman suffering from a skin disease who, by offering Soma to Indra, was cured and made 'sun-skinned.' Her story (RV 8.91) shows Indra's grace towards female devotees." },
        { source: "Stephanie Jamison (Western)", meaning: "A rare but significant female voice in the Rig Veda. Her hymn is personal and deals with bodily concerns, offering a different perspective from the more common themes of battle and cosmic order." }
    ]
},
{
    word: "Aditi (अदिति)",
    root: "a 'not' + diti 'binding'",
    short_meaning: "The unbound, infinite; the mother of the Ādityas.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The mother of the Āditya gods, and sometimes of all gods. She is the earth, the sky, the mother, the father. She represents the boundless expanse from which all is born." },
        { source: "Aurobindo (Indian)", meaning: "The pure, infinite, and undivided consciousness of the Divine Mother. She is the ultimate source and substance of all existence, the principle of cosmic boundlessness." }
    ]
},
{
    word: "Uśanā (उशना)",
    root: "√vaś 'to desire, will'",
    short_meaning: "An ancient, wise rishi, associated with the Asuras.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A wise seer, also known as Kāvya Uśanā, who is credited with hymns in the Rig Veda. In later texts (Purāṇas), he becomes Śukrācārya, the preceptor of the Asuras." },
        { source: "Western Scholarship", meaning: "An ancient priestly figure, possibly from a pre-Vedic or rival tradition (hence his later association with Asuras). His inclusion in the Rig Veda suggests the integration of various priestly lineages over time." }
    ]
},
// Words associated with Maṇḍala 9 (The Soma Pavamāna Book)
{
    word: "Pavamāna (पवमान)",
    root: "√pū 'to purify'",
    short_meaning: "The 'self-purifying' or 'flowing clear,' an epithet of Soma.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Soma as it is being purified by flowing through the wool filter into the collection vats. All hymns in Mandala 9 are addressed to Soma Pavamāna." },
        { source: "Aurobindo (Indian)", meaning: "The current of divine bliss (Ananda) as it purifies itself and flows through all the levels of one's being, clarifying the mind and vitalizing the body." }
    ]
},
{
    word: "Indu (इन्दु)",
    root: "Uncertain, related to 'drop'",
    short_meaning: "A bright drop, a poetic term for Soma.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A drop of the Soma juice. A frequent and affectionate term for the offering, also later associated with the Moon." },
        { source: "Western Philology", meaning: "A poetic synonym for Soma, emphasizing its nature as a liquid offering composed of individual drops. Its later connection to the moon solidifies the Soma-Moon identification." }
    ]
},
{
    word: "Mada (मद)",
    root: "√mad 'to rejoice, be intoxicated'",
    short_meaning: "Intoxication, exhilaration, inspiration, ecstasy.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The exhilarating and intoxicating effect of the Soma drink, which gives Indra the strength to fight Vṛtra and inspires the rishis to compose hymns." },
        { source: "Aurobindo (Indian)", meaning: "Spiritual ecstasy or divine bliss (Ananda). It is not mere physical intoxication but the joy of the divine consciousness flooding the being." }
    ]
},
{
    word: "Adribhiḥ (अद्रिभिः)",
    root: "adri 'stone, rock'",
    short_meaning: "With the pressing stones.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The instrumental plural of 'adri,' meaning the stones used by the priests to press the Soma stalks and extract the juice." },
        { source: "Western Ritual Study", meaning: "A key implement of the Soma ritual. The 'adri' are often personified and spoken to in the hymns, highlighting the deification of even the functional elements of the sacrifice." }
    ]
},
{
    word: "Kalāśa (कलश)",
    root: "Uncertain",
    short_meaning: "A jar, vat, or pitcher used for Soma.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The wooden vat or container into which the purified Soma juice is collected. Often described as the 'womb' for the Soma." },
        { source: "Aurobindo (Indian)", meaning: "Symbolizes the human body-consciousness or the system of the being, which acts as the vessel to receive and hold the divine bliss (Soma)." }
    ]
},
{
    word: "Andhas (अन्धस्)",
    root: "Uncertain, possibly related to 'herb'",
    short_meaning: "The Soma plant itself.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A term for the Soma plant, distinct from the juice (rasa). It refers to the physical substance that is pressed." },
        { source: "Western Botany/History", meaning: "A key term in the debate over the botanical identity of the original Soma plant. Scholars have proposed various candidates like Ephedra, fly agaric, or Syrian rue for the 'Andhas'." }
    ]
},
{
    word: "Rasā (रसा)",
    root: "√ras 'to taste'",
    short_meaning: "Essence, juice; a mythical cosmic river.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Can mean the juice or essence of the Soma. It is also the name of a mythical river that encircles the world, which the Paṇis had to cross." },
        { source: "Michael Witzel (Western)", meaning: "A mythical river corresponding to the Avestan 'Raŋhā,' representing the boundary between the ordered world and the realm of chaos or the underworld. It has parallels in other Indo-European mythologies (e.g., the Greek Styx)." }
    ]
},
{
    word: "Hari (हरि)",
    root: "√hṛ 'to take' or related to 'yellow/tawny'",
    short_meaning: "Tawny, yellow-green; an epithet for Soma and Indra's horses.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "An adjective describing the yellowish or greenish color of the Soma stalks or the pressed juice. Also the name of Indra's two tawny bay horses." },
        { source: "Aurobindo (Indian)", meaning: "Symbolizes brilliant, dynamic energy. Indra's 'hari' horses are the twin powers of divine light and divine action that carry the illumined mind." }
    ]
},
{
    word: "Vana (वन)",
    root: "√van 'to like, desire'",
    short_meaning: "Forest, wood; also the wooden Soma vat.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Can mean a forest or a tree. In the context of Mandala 9, it frequently refers to the wooden vessels (kalāśa or droṇa) into which the Soma flows, with the juice being likened to a bird flying to its 'wood' or nest." },
        { source: "Aurobindo (Indian)", meaning: "Symbolizes the substance of being, either material or spiritual. Soma flowing into the 'vana' represents the divine bliss entering and suffusing the very substance of our existence." }
    ]
},
{
    word: "Avyāḥ Vāra (अव्याः वार)",
    root: "avi 'sheep' + vāra 'hair, wool'",
    short_meaning: "The sheep's wool filter for Soma.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The filter, made of sheep's wool, through which the crushed Soma stalks are strained to purify the juice from solid particles." },
        { source: "Western Ritual Study", meaning: "A crucial piece of ritual technology. The process of filtering Soma through the 'vara' is a central, recurring image in Mandala 9, symbolizing purification on both a physical and spiritual level." }
    ]
},

// Words associated with Maṇḍala 10 (Later, Philosophical Hymns)
{
    word: "Puruṣa (पुरुष)",
    root: "puri-śaya 'city-dweller' (in the body)",
    short_meaning: "The cosmic person; the primordial being or pure consciousness.",
    commentaries: [
        { source: "Puruṣa Sūkta (RV 10.90)", meaning: "The primordial cosmic being with a thousand heads, who is sacrificed by the gods to create the universe. From his body emerge the four varṇas, the celestial bodies, and all of creation." },
        { source: "Sāṅkhya Philosophy (Indian)", meaning: "Pure, unchanging, inactive Consciousness. It is the silent witness, distinct from Prakṛti (material nature), which is the active but non-conscious principle." },
        { source: "Hermann Oldenberg (Western)", meaning: "A relatively late, highly speculative hymn that attempts to provide a systematic cosmology based on the model of the sacrifice. It has immense importance for later Indian social and philosophical thought." }
    ]
},
{
    word: "Hiraṇyagarbha (हिरण्यगर्भ)",
    root: "hiraṇya 'gold' + garbha 'womb/embryo'",
    short_meaning: "The golden embryo; the primordial source of creation.",
    commentaries: [
        { source: "Hiraṇyagarbha Sūkta (RV 10.121)", meaning: "The 'golden embryo' that arose in the beginning from the waters, becoming the sole lord of all existence. He established the earth and sky. The hymn repeatedly asks, 'What god shall we worship with our oblation?'" },
        { source: "Vedānta Philosophy (Indian)", meaning: "The cosmic soul or cosmic mind (subtle body of the cosmos). It is the first manifestation of the unmanifest Brahman, the creative intelligence from which the gross universe emerges." }
    ]
},
{
    word: "Nāsadīya (नासदीय)",
    root: "na 'not' + asat 'non-being'",
    short_meaning: "From 'na asat' ('not non-existent'), the Creation Hymn (10.129).",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "A hymn describing the state before creation, where there was neither being (sat) nor non-being (asat). Creation arose from 'That One' (Tad Ekam) through the power of heat (tapas) and desire (kāma)." },
        { source: "Carl Sagan (Western)", meaning: "Famously cited as an ancient example of profound philosophical and scientific skepticism, questioning the origins of the universe in a way that resonates with modern cosmology. It acknowledges the limits of human knowledge about ultimate origins." }
    ]
},
{
    word: "Yama (यम)",
    root: "√yam 'to restrain, control'",
    short_meaning: "The first mortal, who became the ruler of the dead.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The king who rules over the realm of the ancestors (pitṛs). He was the first human to die and chart the path to the afterlife, and he gathers the deceased in his kingdom." },
        { source: "Western Comparative Mythology", meaning: "Cognate with the Avestan 'Yima' and possibly Norse 'Ymir.' He is an archetypal 'first man' figure who also becomes the 'first to die,' thereby establishing the realm of the dead." }
    ]
},
{
    word: "Śraddhā (श्रद्धा)",
    root: "śrat 'truth' + √dhā 'to put'",
    short_meaning: "Faith, trust, belief.",
    commentaries: [
        { source: "Śraddhā Sūkta (RV 10.151)", meaning: "Faith personified as a goddess. It is through Śraddhā that the fire is kindled and the oblation is offered. She is invoked to bestow faith upon the sacrificer and the people." },
        { source: "Western Scholarship", meaning: "A late hymn that deifies an abstract concept, showing the evolution of Vedic thought. It highlights the perceived necessity of 'faith' as the psychological foundation for the ritual to be effective." }
    ]
},
{
    word: "Manyu (मन्यु)",
    root: "√man 'to think'",
    short_meaning: "Wrath, passion, fervor, spirit.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "Wrath or anger personified as a deity. He is invoked as a form of Indra or Agni to grant vigor and destroy enemies in battle. He is the divine fury of the warrior." },
        { source: "Aurobindo (Indian)", meaning: "Not just anger, but the divine fervor or intensity of will. It is the righteous passion and force of consciousness that overcomes obstacles on the spiritual path." }
    ]
},
{
    word: "Araṇyānī (अरण्यानी)",
    root: "araṇya 'forest'",
    short_meaning: "The goddess of the forest.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The personified spirit or goddess of the wilderness. The hymn (10.146) praises her mysterious, elusive, and bounteous nature, describing the sounds and sights of the forest." },
        { source: "Ralph T.H. Griffith (Western)", meaning: "A beautiful and rare example of a hymn dedicated to a spirit of nature, a 'nymph of the forest.' It reflects an animistic perspective and a poetic appreciation for the wild." }
    ]
},
{
    word: "Saramā (सरमा)",
    root: "√sṛ 'to run'",
    short_meaning: "The divine bitch; Indra's messenger.",
    commentaries: [
        { source: "Sāyaṇa (Indian)", meaning: "The hound of the gods, sent by Indra as a messenger to the Paṇis to demand the return of the stolen cows. Her dialogue with the Paṇis is a key part of the myth." },
        { source: "Max Müller (Western)", meaning: "Interpreted as a nature myth, where Saramā represents the Dawn. She 'runs' ahead and finds the 'rays of light' (cows) that have been stolen by the 'darkness' (Paṇis)." }
    ]
},
{
    word: "Skambha (स्कम्भ)",
    root: "√skambh 'to support'",
    short_meaning: "The cosmic pillar or support (found mainly in Atharva Veda, but conceptually present).",
    commentaries: [
        { source: "Atharva Veda (10.7)", meaning: "The cosmic pillar or frame that supports the entire universe. It is a highly philosophical concept, identified with Brahman, that serves as the foundation for all of existence." },
        { source: "F. B. J. Kuiper (Western)", meaning: "A cosmological concept, the *Axis Mundi*, that provides the structural support for the cosmos, separating heaven and earth and providing a conduit between them. This is a common feature in many archaic cosmologies." }
    ]
},
{
    word: "Saṁjñāna (संज्ञान)",
    root: "saṁ 'together' + √jñā 'to know'",
    short_meaning: "Mutual understanding, harmony, collective consciousness.",
    commentaries: [
        { source: "Saṁjñāna Sūkta (RV 10.191)", meaning: "The final hymn of the Rig Veda, a prayer for unity and accord. It calls for the assemblers to have a common purpose, a united heart, and a single mind so they may function together happily." },
        { source: "Western Social View", meaning: "A powerful sociological statement expressing the ideal of social and political harmony for the Vedic assembly (samiti). It is a plea for consensus and unity, crucial for the survival and prosperity of the tribe." }
    ]
}  
];

/* ================================================================================
|| PASTE YOUR FULL `rigVedaData` ARRAY HERE                                       ||
|| The data is skipped as requested.                                              ||
================================================================================ */
const rigVedaData = [
        // MANDALA 1
        {mandala: 1, hymn: 1, verses: 9, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 2, verses: 9, seer: 'vaiśvāmitro madhucchandāḥ', divinity: '(1-3)vāyuḥ,(4-6)indravāyū,(7-9)mitrāvaruṇau', meter: 'gāyatrī'},
        {mandala: 1, hymn: 3, verses: 12, seer: 'vaiśvāmitro madhucchandāḥ', divinity: '(1-3)aśvinau,(4-6)indraḥ,(7-9)viśvedevāḥ,(10-12)sarasvatī', meter: 'gāyatrī'},
        {mandala: 1, hymn: 4, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 5, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 6, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 7, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 8, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 9, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 10, verses: 12, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'indraḥ', meter: 'anuṣṭup'},
        {mandala: 1, hymn: 11, verses: 8, seer: 'mādhucchandaso jetā', divinity: 'indraḥ', meter: 'anuṣṭup'},
        {mandala: 1, hymn: 12, verses: 12, seer: 'kāṇvo medhātithiḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 13, verses: 12, seer: 'kāṇvo medhātithiḥ', divinity: '(1-5,12)agniḥ,(6)devīrdvāraḥ,(7)uṣāsānaktā,(8)daivyau hotārau,(9)iḻā-sarasvatī-mahī,(10)tvaṣṭā,(11)vanaspatiḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 14, verses: 12, seer: 'kāṇvo medhātithiḥ', divinity: 'viśvedevāḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 15, verses: 12, seer: 'kāṇvo medhātithiḥ', divinity: '(1)indraḥ,(2)marutaḥ,(3)tvaṣṭā,(4,7-10,12)agniḥ,(5)indraḥ,(6)mitrāvaruṇau,(11)aśvinau', meter: 'gāyatrī'},
        {mandala: 1, hymn: 16, verses: 9, seer: 'kāṇvo medhātithiḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 17, verses: 9, seer: 'kāṇvo medhātithiḥ', divinity: 'indrāvaruṇau', meter: 'gāyatrī'},
        {mandala: 1, hymn: 18, verses: 9, seer: 'kāṇvo medhātithiḥ', divinity: 'brahmaṇaspatiḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 19, verses: 9, seer: 'kāṇvo medhātithiḥ', divinity: 'agniḥ-marutaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 20, verses: 8, seer: 'kāṇvo medhātithiḥ', divinity: 'ṛbhavaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 21, verses: 6, seer: 'kāṇvo medhātithiḥ', divinity: 'indrāgnī', meter: 'gāyatrī'},
        {mandala: 1, hymn: 22, verses: 21, seer: 'kāṇvo medhātithiḥ', divinity: '(1-4)aśvinau,(5-8)savitā,(9-10)agniḥ,(11)devyaḥ,(12)indrāṇī-varuṇānī-agnāyī,(13-14)dyāvāpṛthivyau,(15)pṛthivī,(16-21)viṣṇuḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 23, verses: 24, seer: 'kāṇvo medhātithiḥ', divinity: '(1)vāyuḥ,(2-3)indravāyū,(4-6)mitrāvaruṇau,(7-9)indraḥ-marutaḥ,(10-12)viśvedevāḥ,(13-15)pūṣā,(16-23)āpaḥ,(24)agniḥ', meter: '(1-18,21)gāyatrī,(19)uṣṇik,(20,22-24)anuṣṭup'},
        {mandala: 1, hymn: 24, verses: 15, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: '(1)kaḥ,(2)agniḥ,(3-5)savitā,(6-15)varuṇaḥ', meter: '(1-2,6-15)triṣṭup,(3-5)gāyatrī'},
        {mandala: 1, hymn: 25, verses: 21, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: 'varuṇaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 26, verses: 10, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 27, verses: 13, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: '(1-12)agniḥ,(13)devāḥ', meter: '(1-12)gāyatrī,(13)triṣṭup'},
        {mandala: 1, hymn: 28, verses: 9, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: '(1-4)indraḥ,(5-6)ulūkhalam,(7-8)ulūkhalamusale,(9)somaḥ', meter: '(1-6)anuṣṭup,(7-9)gāyatrī'},
        {mandala: 1, hymn: 29, verses: 7, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: 'indraḥ', meter: 'paṅktiḥ'},
        {mandala: 1, hymn: 30, verses: 22, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: '(1-16)indraḥ,(17-19)aśvinau,(20-22)uṣāḥ', meter: '(1-15,17-22)gāyatrī,(16)triṣṭup'},
        {mandala: 1, hymn: 31, verses: 18, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: 'agniḥ', meter: '(1-7,9-15,17)jagatī,(8,16,18)triṣṭup'},
        {mandala: 1, hymn: 32, verses: 15, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 33, verses: 15, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 34, verses: 12, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: 'aśvinau', meter: '(1-8,10-11)jagatī,(9,12)triṣṭup'},
        {mandala: 1, hymn: 35, verses: 11, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: '(1)agniḥ-mitrāvaruṇau-rātriḥ-savitā,(2-11)savitā', meter: '(1,9)jagatī,(2-8,10-11)triṣṭup'},
        {mandala: 1, hymn: 36, verses: 20, seer: 'ghauraḥ kaṇvaḥ', divinity: 'agniḥ', meter: 'bṛhatī'},
        {mandala: 1, hymn: 37, verses: 15, seer: 'ghauraḥ kaṇvaḥ', divinity: 'marutaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 38, verses: 15, seer: 'ghauraḥ kaṇvaḥ', divinity: 'marutaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 39, verses: 10, seer: 'ghauraḥ kaṇvaḥ', divinity: 'marutaḥ', meter: 'bṛhatī'},
        {mandala: 1, hymn: 40, verses: 8, seer: 'ghauraḥ kaṇvaḥ', divinity: 'brahmaṇaspatiḥ', meter: 'bṛhatī'},
        {mandala: 1, hymn: 41, verses: 9, seer: 'ghauraḥ kaṇvaḥ', divinity: 'ādityāḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 42, verses: 10, seer: 'ghauraḥ kaṇvaḥ', divinity: 'pūṣā', meter: 'gāyatrī'},
        {mandala: 1, hymn: 43, verses: 9, seer: 'ghauraḥ kaṇvaḥ', divinity: '(1-6)rudraḥ,(7-9)somaḥ', meter: '(1-8)gāyatrī,(9)anuṣṭup'},
        {mandala: 1, hymn: 44, verses: 14, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'agniḥ', meter: 'bṛhatī'},
        {mandala: 1, hymn: 45, verses: 10, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'agniḥ', meter: 'anuṣṭup'},
        {mandala: 1, hymn: 46, verses: 15, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'aśvinau', meter: 'gāyatrī'},
        {mandala: 1, hymn: 47, verses: 10, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'aśvinau', meter: 'bṛhatī'},
        {mandala: 1, hymn: 48, verses: 16, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'uṣāḥ', meter: 'bṛhatī'},
        {mandala: 1, hymn: 49, verses: 4, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'uṣāḥ', meter: 'anuṣṭup'},
        {mandala: 1, hymn: 50, verses: 13, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'sūryaḥ', meter: '(1-9)gāyatrī,(10-13)anuṣṭup'},
        {mandala: 1, hymn: 51, verses: 15, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: '(1-13)jagatī,(14-15)triṣṭup'},
        {mandala: 1, hymn: 52, verses: 15, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: '(1-12,14)jagatī,(13,15)triṣṭup'},
        {mandala: 1, hymn: 53, verses: 11, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: '(1-9)jagatī,(10-11)triṣṭup'},
        {mandala: 1, hymn: 54, verses: 11, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: '(1-5,7,10)jagatī,(6,8-9,11)triṣṭup'},
        {mandala: 1, hymn: 55, verses: 8, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 56, verses: 6, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 57, verses: 6, seer: 'āṅgirasaḥ savyaḥ', divinity: 'indraḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 58, verses: 9, seer: 'gautamo nodhāḥ', divinity: 'agniḥ', meter: '(1-5)jagatī,(6-9)triṣṭup'},
        {mandala: 1, hymn: 59, verses: 7, seer: 'gautamo nodhāḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 60, verses: 5, seer: 'gautamo nodhāḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 61, verses: 16, seer: 'gautamo nodhāḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 62, verses: 13, seer: 'gautamo nodhāḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 63, verses: 9, seer: 'gautamo nodhāḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 64, verses: 15, seer: 'gautamo nodhāḥ', divinity: 'marutaḥ', meter: '(1-14)jagatī,(15)triṣṭup'},
        {mandala: 1, hymn: 65, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 66, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 67, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 68, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 69, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 70, verses: 11, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 71, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 72, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 73, verses: 10, seer: 'śāktyaḥ parāśaraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 74, verses: 9, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 75, verses: 5, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 76, verses: 5, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 77, verses: 5, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 78, verses: 5, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 79, verses: 12, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agniḥ', meter: '(1-3)triṣṭup,(4-6)uṣṇik,(7-12)gāyatrī'},
        {mandala: 1, hymn: 80, verses: 16, seer: 'rāhūgaṇo gotamaḥ', divinity: 'indraḥ', meter: 'paṅktiḥ'},
        {mandala: 1, hymn: 81, verses: 9, seer: 'rāhūgaṇo gotamaḥ', divinity: 'indraḥ', meter: 'paṅktiḥ'},
        {mandala: 1, hymn: 82, verses: 6, seer: 'rāhūgaṇo gotamaḥ', divinity: 'indraḥ', meter: '(1-5)paṅktiḥ,(6)jagatī'},
        {mandala: 1, hymn: 83, verses: 6, seer: 'rāhūgaṇo gotamaḥ', divinity: 'indraḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 84, verses: 20, seer: 'rāhūgaṇo gotamaḥ', divinity: 'indraḥ', meter: '(1-6)anuṣṭup,(7-9)uṣṇik,(10-12)paṅktiḥ,(13-15)gāyatrī,(16-18)triṣṭup,(19-20)bṛhatī'},
        {mandala: 1, hymn: 85, verses: 12, seer: 'rāhūgaṇo gotamaḥ', divinity: 'marutaḥ', meter: '(1-4,6-11)jagatī,(5,12)triṣṭup'},
        {mandala: 1, hymn: 86, verses: 10, seer: 'rāhūgaṇo gotamaḥ', divinity: 'marutaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 87, verses: 6, seer: 'rāhūgaṇo gotamaḥ', divinity: 'marutaḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 88, verses: 6, seer: 'rāhūgaṇo gotamaḥ', divinity: 'marutaḥ', meter: '(1,6)paṅktiḥ,(2-4)triṣṭup,(5)virāṭ'},
        {mandala: 1, hymn: 89, verses: 10, seer: 'rāhūgaṇo gotamaḥ', divinity: 'viśvedevāḥ', meter: '(1-5,7)jagatī,(6)virāṭ,(8-10)triṣṭup'},
        {mandala: 1, hymn: 90, verses: 9, seer: 'rāhūgaṇo gotamaḥ', divinity: 'viśvedevāḥ', meter: '(1-8)gāyatrī,(9)anuṣṭup'},
        {mandala: 1, hymn: 91, verses: 23, seer: 'rāhūgaṇo gotamaḥ', divinity: 'somaḥ', meter: '(1-4,18-23)triṣṭup,(5-16)gāyatrī,(17)uṣṇik'},
        {mandala: 1, hymn: 92, verses: 18, seer: 'rāhūgaṇo gotamaḥ', divinity: '(1-15)uṣāḥ,(16-18)aśvinau', meter: '(1-4)jagatī,(5-12)triṣṭup,(13-18)uṣṇik'},
        {mandala: 1, hymn: 93, verses: 12, seer: 'rāhūgaṇo gotamaḥ', divinity: 'agnīṣomau', meter: '(1-3)anuṣṭup,(4-7,12)triṣṭup,(8)jagatī,(9-11)gāyatrī'},
        {mandala: 1, hymn: 94, verses: 16, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'agniḥ', meter: '(1-14)jagatī,(15-16)triṣṭup'},
        {mandala: 1, hymn: 95, verses: 11, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 96, verses: 9, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 97, verses: 8, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 98, verses: 3, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 99, verses: 1, seer: 'mārīcaḥ kaśyapaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 100, verses: 19, seer: 'vārṣāgirāḥ ṛjrāśvaḥ-ambarīṣaḥ-sahadevaḥ-bhayamānaḥ-surādhasaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 101, verses: 11, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'indraḥ', meter: '(1-7)jagatī,(8-11)triṣṭup'},
        {mandala: 1, hymn: 102, verses: 11, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'indraḥ', meter: '(1-10)jagatī,(11)triṣṭup'},
        {mandala: 1, hymn: 103, verses: 8, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 104, verses: 9, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 105, verses: 19, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'viśvedevāḥ', meter: '(1-7,9-18)paṅktiḥ,(8)bṛhatī,(19)triṣṭup'},
        {mandala: 1, hymn: 106, verses: 7, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'viśvedevāḥ', meter: '(1-6)jagatī,(7)triṣṭup'},
        {mandala: 1, hymn: 107, verses: 3, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 108, verses: 13, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'indrāgnī', meter: 'triṣṭup'},
        {mandala: 1, hymn: 109, verses: 8, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'indrāgnī', meter: 'triṣṭup'},
        {mandala: 1, hymn: 110, verses: 9, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'ṛbhavaḥ', meter: '(1-4,6-8)jagatī,(5,9)triṣṭup'},
        {mandala: 1, hymn: 111, verses: 5, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'ṛbhavaḥ', meter: '(1-4)jagatī,(5)triṣṭup'},
        {mandala: 1, hymn: 112, verses: 25, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'aśvinau', meter: '(1-23)jagatī,(24-25)triṣṭup'},
        {mandala: 1, hymn: 113, verses: 20, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 114, verses: 11, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'rudraḥ', meter: '(1-9)jagatī,(10-11)triṣṭup'},
        {mandala: 1, hymn: 115, verses: 6, seer: 'āṅgirasaḥ kutsaḥ', divinity: 'sūryaḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 116, verses: 25, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 117, verses: 25, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 118, verses: 11, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 119, verses: 10, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'aśvinau', meter: 'jagatī'},
        {mandala: 1, hymn: 120, verses: 12, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'aśvinau', meter: '(1,10-12)gāyatrī,(2)kakup,(4)naṣṭarūpī,(5)tanuśirā,(6)uṣṇik,(7)bṛhatī,(8)kṛtiḥ,(3,9)virāṭ'},
        {mandala: 1, hymn: 121, verses: 15, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 122, verses: 15, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'viśvedevāḥ', meter: '(1-4,7-15)triṣṭup,(5-6)virāṭ'},
        {mandala: 1, hymn: 123, verses: 13, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 124, verses: 13, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 125, verses: 7, seer: 'auśijo dairghatamasaḥ kakṣīvān', divinity: 'svanayamya dānastutiḥ', meter: '(1-3,6-7)triṣṭup,(4-5)jagatī'},
        {mandala: 1, hymn: 126, verses: 7, seer: '(1-5)auśijo dairghatamasaḥ kakṣīvān,(6)svanayo bhāvayavyaḥ,(7)romaśā', divinity: '(1-5,7)svanayo bhāvayavyaḥ,(6)romaśā', meter: '(1-5)triṣṭup,(6,7)anuṣṭup'},
        {mandala: 1, hymn: 127, verses: 11, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'agniḥ', meter: '(1-5,7-11)atyaṣṭiḥ,(6)ādhṛtiḥ'},
        {mandala: 1, hymn: 128, verses: 8, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'agniḥ', meter: 'atyaṣṭiḥ'},
        {mandala: 1, hymn: 129, verses: 11, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'indraḥ', meter: '(1-7,10)atyaṣṭiḥ,(8-9)atiśakvarī,(11)aṣṭiḥ'},
        {mandala: 1, hymn: 130, verses: 10, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'indraḥ', meter: '(1-9)atyaṣṭiḥ,(10)triṣṭup'},
        {mandala: 1, hymn: 131, verses: 7, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'indraḥ', meter: 'atyaṣṭiḥ'},
        {mandala: 1, hymn: 132, verses: 6, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'indraḥ', meter: 'atyaṣṭiḥ'},
        {mandala: 1, hymn: 133, verses: 7, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'indraḥ', meter: '(1)triṣṭup,(2-4)anuṣṭup,(5)gāyatrī,(6)dhṛtiḥ,(7)aṣṭiḥ'},
        {mandala: 1, hymn: 134, verses: 6, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'vāyuḥ', meter: '(1-5)atyaṣṭiḥ,(6)aṣṭiḥ'},
        {mandala: 1, hymn: 135, verses: 9, seer: 'daivaodāsiḥ parucchepaḥ', divinity: '(1-3,9)vāyuḥ,(4-8)indravāyū', meter: '(1-6,9)atyaṣṭiḥ,(7-8)aṣṭiḥ'},
        {mandala: 1, hymn: 136, verses: 7, seer: 'daivaodāsiḥ parucchepaḥ', divinity: '(1-5)mitrāvaruṇau,(6-7)liṅgoktāḥ', meter: '(1-6)atyaṣṭiḥ,(7)triṣṭup'},
        {mandala: 1, hymn: 137, verses: 3, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'mitrāvaruṇau', meter: 'atiśakvarī'},
        {mandala: 1, hymn: 138, verses: 4, seer: 'daivaodāsiḥ parucchepaḥ', divinity: 'pūṣā', meter: 'atyaṣṭiḥ'},
        {mandala: 1, hymn: 139, verses: 11, seer: 'daivaodāsiḥ parucchepaḥ', divinity: '(1,11)viśvedevāḥ,(2)mitrāvaruṇau,(3-5)aśvinau,(6)indraḥ,(7)agniḥ,(8)marutaḥ,(9)indrāgnī,(10)bṛhaspatiḥ', meter: '(1-4,6-10)atyaṣṭiḥ,(5)bṛhatī,(11)triṣṭup'},
        {mandala: 1, hymn: 140, verses: 13, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: '(1-9,11)jagatī,(10,12-13)triṣṭup'},
        {mandala: 1, hymn: 141, verses: 13, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: '(1-11)jagatī,(12-13)triṣṭup'},
        {mandala: 1, hymn: 142, verses: 13, seer: 'aucathyo dīrghatamāḥ', divinity: '(1-4)agniḥ,(5)barhiḥ,(6)devīrdvāraḥ,(7)uṣāsānaktā,(8)daivyau hotārau,(9)sarasvatī-iḻā-bhāratī,(10)tvaṣṭā,(11)vanaspatiḥ,(12)svāhākṛtayaḥ,(13)indraḥ', meter: 'anuṣṭup'},
        {mandala: 1, hymn: 143, verses: 8, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: '(1-7)jagatī,(8)triṣṭup'},
        {mandala: 1, hymn: 144, verses: 7, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 145, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: '(1-4)jagatī,(5)triṣṭup'},
        {mandala: 1, hymn: 146, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 147, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 148, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 149, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 1, hymn: 150, verses: 3, seer: 'aucathyo dīrghatamāḥ', divinity: 'agniḥ', meter: 'uṣṇik'},
        {mandala: 1, hymn: 151, verses: 9, seer: 'aucathyo dīrghatamāḥ', divinity: '(1)mitraḥ,(2-9)mitrāvaruṇau', meter: 'jagatī'},
        {mandala: 1, hymn: 152, verses: 7, seer: 'aucathyo dīrghatamāḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 153, verses: 4, seer: 'aucathyo dīrghatamāḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 154, verses: 6, seer: 'aucathyo dīrghatamāḥ', divinity: 'viṣṇuḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 155, verses: 6, seer: 'aucathyo dīrghatamāḥ', divinity: '(1-3)indrāviṣṇū,(4-6)viṣṇuḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 156, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'viṣṇuḥ', meter: 'jagatī'},
        {mandala: 1, hymn: 157, verses: 6, seer: 'aucathyo dīrghatamāḥ', divinity: 'aśvinau', meter: '(1-4)jagatī,(5-6)triṣṭup'},
        {mandala: 1, hymn: 158, verses: 6, seer: 'aucathyo dīrghatamāḥ', divinity: 'aśvinau', meter: '(1-5)triṣṭup,(6)anuṣṭup'},
        {mandala: 1, hymn: 159, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'dyāvāpṛthivyau', meter: 'jagatī'},
        {mandala: 1, hymn: 160, verses: 5, seer: 'aucathyo dīrghatamāḥ', divinity: 'dyāvāpṛthivyau', meter: 'jagatī'},
        {mandala: 1, hymn: 161, verses: 14, seer: 'aucathyo dīrghatamāḥ', divinity: 'ṛbhavaḥ', meter: '(1-13)jagatī,(14)triṣṭup'},
        {mandala: 1, hymn: 162, verses: 22, seer: 'aucathyo dīrghatamāḥ', divinity: 'aśvaḥ', meter: '(1-2,4-5,7-22)triṣṭup,(3,6)jagatī'},
        {mandala: 1, hymn: 163, verses: 13, seer: 'aucathyo dīrghatamāḥ', divinity: 'aśvaḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 164, verses: 52, seer: 'aucathyo dīrghatamāḥ', divinity: '(1-41)viśvedevāḥ,(42)vāk-āpaḥ,(43)somaḥ,(44)keśinaḥ,(45)vāk,(46-47)sūryaḥ,(48)saṁvatsarakālacakram,(49)sarasvatī,(50)sādhyāḥ,(51-52)sūryaḥ', meter: '(1-11,13-14,16-22,24-28,30-35,37-40,43-50,52)triṣṭup,(12,15,23,29,36,41)jagatī,(42)paṅktiḥ,(51)anuṣṭup'},
        {mandala: 1, hymn: 165, verses: 15, seer: '(1-2,4,6,8,10-12)indraḥ,(3,5,7,9)marutaḥ,(13-15)maitrāvaruṇiragastyaḥ', divinity: 'marutvānindraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 166, verses: 15, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'marutaḥ', meter: '(1-13)jagatī,(14-15)triṣṭup'},
        {mandala: 1, hymn: 167, verses: 11, seer: 'maitrāvaruṇiragastyaḥ', divinity: '(1)indraḥ,(2-11)marutaḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 168, verses: 10, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'marutaḥ', meter: '(1-7)jagatī,(8-10)triṣṭup'},
        {mandala: 1, hymn: 169, verses: 8, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: '(1,3-8)triṣṭup,(2)virāṭ'},
        {mandala: 1, hymn: 170, verses: 5, seer: '(1,3,4)indraḥ,(2,5)maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: '(1)bṛhatī,(2-4)anuṣṭup,(5)triṣṭup'},
        {mandala: 1, hymn: 171, verses: 6, seer: 'maitrāvaruṇiragastyaḥ', divinity: '(1-2)marutaḥ,(3-6)marutvānindraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 172, verses: 3, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'marutaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 173, verses: 13, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 174, verses: 10, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 175, verses: 6, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: '(1)bṛhatī,(2-5)anuṣṭup,(6)triṣṭup'},
        {mandala: 1, hymn: 176, verses: 6, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: '(1-5)anuṣṭup,(6)triṣṭup'},
        {mandala: 1, hymn: 177, verses: 5, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 178, verses: 5, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 179, verses: 6, seer: '(1-2)lopāmudrā,(3-4)maitrāvaruṇiragastyaḥ,(5-6)agastyāntevāsī brahmacārī', divinity: 'ratiḥ', meter: '(1-4,6)triṣṭup,(5)bṛhatī'},
        {mandala: 1, hymn: 180, verses: 10, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 181, verses: 9, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 182, verses: 8, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'aśvinau', meter: '(1-5,7)jagatī,(6,8)triṣṭup'},
        {mandala: 1, hymn: 183, verses: 6, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 184, verses: 6, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 185, verses: 11, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'dyāvāpṛthivyau', meter: 'triṣṭup'},
        {mandala: 1, hymn: 186, verses: 11, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 187, verses: 11, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'annam', meter: '(1,3,5-7,11)anuṣṭup,(2,4,8-10)gāyatrī'},
        {mandala: 1, hymn: 188, verses: 11, seer: 'maitrāvaruṇiragastyaḥ', divinity: '(1-3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: 'gāyatrī'},
        {mandala: 1, hymn: 189, verses: 8, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 190, verses: 8, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'bṛhaspatiḥ', meter: 'triṣṭup'},
        {mandala: 1, hymn: 191, verses: 16, seer: 'maitrāvaruṇiragastyaḥ', divinity: 'aptṛṇaḥ-sūryaḥ', meter: '(1-9,14-16)anuṣṭup,(10-11)paṅktiḥ,(13)bṛhatī'},
        
        // MANDALA 2
        {mandala: 2, hymn: 1, verses: 16, seer: 'śaunako gṛtsamadaḥ', divinity: 'agniḥ', meter: 'jagatī'},
        {mandala: 2, hymn: 2, verses: 13, seer: 'śaunako gṛtsamadaḥ', divinity: 'agniḥ', meter: 'jagatī'},
        {mandala: 2, hymn: 3, verses: 11, seer: 'śaunako gṛtsamadaḥ', divinity: '(1-3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: '(1-6,8-11)triṣṭup,(7)jagatī'},
        {mandala: 2, hymn: 4, verses: 9, seer: 'bhārgavaḥ somāhutiḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 5, verses: 8, seer: 'bhārgavaḥ somāhutiḥ', divinity: 'agniḥ', meter: 'anuṣṭup'},
        {mandala: 2, hymn: 6, verses: 8, seer: 'bhārgavaḥ somāhutiḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 2, hymn: 7, verses: 6, seer: 'bhārgavaḥ somāhutiḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 2, hymn: 8, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: 'agniḥ', meter: '(1-5)gāyatrī,(6)anuṣṭup'},
        {mandala: 2, hymn: 9, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 10, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 11, verses: 21, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1-20)virāṭ,(21)triṣṭup'},
        {mandala: 2, hymn: 12, verses: 15, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 13, verses: 13, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1-12)jagatī,(13)triṣṭup'},
        {mandala: 2, hymn: 14, verses: 12, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 15, verses: 10, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 16, verses: 9, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1-8)jagatī,(9)triṣṭup'},
        {mandala: 2, hymn: 17, verses: 9, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1-7)jagatī,(8-9)triṣṭup'},
        {mandala: 2, hymn: 18, verses: 9, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 19, verses: 9, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 20, verses: 9, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1-2,4-9)triṣṭup,(3)virāṭ'},
        {mandala: 2, hymn: 21, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1-5)jagatī,(6)triṣṭup'},
        {mandala: 2, hymn: 22, verses: 4, seer: 'śaunako gṛtsamadaḥ', divinity: 'indraḥ', meter: '(1)aṣṭiḥ,(2-4)atiśakvarī'},
        {mandala: 2, hymn: 23, verses: 19, seer: 'śaunako gṛtsamadaḥ', divinity: '(1,5,9,11,17,19)brahmaṇaspatiḥ,(2-4,6-8,10,12-16,18)bṛhaspatiḥ', meter: '(1-14,16-18)jagatī,(15,19)triṣṭup'},
        {mandala: 2, hymn: 24, verses: 16, seer: 'śaunako gṛtsamadaḥ', divinity: '(1,10)bṛhaspatiḥ,(2-9,11,13-16)brahmaṇaspatiḥ,(12)indrābrahmaṇaspatī', meter: '(1-11,13-15)jagatī,(12,16)triṣṭup'},
        {mandala: 2, hymn: 25, verses: 5, seer: 'śaunako gṛtsamadaḥ', divinity: 'brahmaṇaspatiḥ', meter: 'jagatī'},
        {mandala: 2, hymn: 26, verses: 4, seer: 'śaunako gṛtsamadaḥ', divinity: 'brahmaṇaspatiḥ', meter: 'jagatī'},
        {mandala: 2, hymn: 27, verses: 17, seer: 'gārtsamadaḥ kūrmaḥ', divinity: 'ādityāḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 28, verses: 11, seer: 'gārtsamadaḥ kūrmaḥ', divinity: 'varuṇaḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 29, verses: 7, seer: 'gārtsamadaḥ kūrmaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 30, verses: 11, seer: 'śaunako gṛtsamadaḥ', divinity: '(1-5,7,8,10)indraḥ,(6)indrāsomau,(9)bṛhaspatiḥ,(11)marutaḥ', meter: '(1-10)triṣṭup,(11)jagatī'},
        {mandala: 2, hymn: 31, verses: 7, seer: 'śaunako gṛtsamadaḥ', divinity: 'viśvedevāḥ', meter: '(1-6)jagatī,(7)triṣṭup'},
        {mandala: 2, hymn: 32, verses: 8, seer: 'śaunako gṛtsamadaḥ', divinity: '(1)dyāvāpṛthivyau,(2-3)indraḥ,(4-5)rākā,(6-7)sinīvālī,(8)liṅgoktāḥ', meter: '(1-5)jagatī,(6-8)anuṣṭup'},
        {mandala: 2, hymn: 33, verses: 15, seer: 'śaunako gṛtsamadaḥ', divinity: 'rudraḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 34, verses: 15, seer: 'śaunako gṛtsamadaḥ', divinity: 'marutaḥ', meter: '(1-14)jagatī,(15)triṣṭup'},
        {mandala: 2, hymn: 35, verses: 15, seer: 'śaunako gṛtsamadaḥ', divinity: 'apāṁ napāt', meter: 'triṣṭup'},
        {mandala: 2, hymn: 36, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: '(1)indraḥ,(2)marutaḥ,(3)tvaṣṭā,(4)agniḥ,(5)indraḥ,(6)mitrāvaruṇau', meter: 'jagatī'},
        {mandala: 2, hymn: 37, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: '(1-4)draviṇodāḥ,(5)aśvinau,(6)agniḥ', meter: 'jagatī'},
        {mandala: 2, hymn: 38, verses: 11, seer: 'śaunako gṛtsamadaḥ', divinity: 'savitā', meter: 'triṣṭup'},
        {mandala: 2, hymn: 39, verses: 8, seer: 'śaunako gṛtsamadaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 2, hymn: 40, verses: 6, seer: 'śaunako gṛtsamadaḥ', divinity: 'somāpūṣāṇau', meter: 'triṣṭup'},
        {mandala: 2, hymn: 41, verses: 21, seer: 'śaunako gṛtsamadaḥ', divinity: '(1-2)vāyuḥ,(3)indravāyū,(4-6)mitrāvaruṇau,(7-9)aśvinau,(10-12)indraḥ,(13-15)viśvedevāḥ,(16-18)sarasvatī,(19-21)dyāvāpṛthivyau', meter: '(1-15,19-21)gāyatrī,(16-17)anuṣṭup,(18)bṛhatī'},
        {mandala: 2, hymn: 42, verses: 3, seer: 'śaunako gṛtsamadaḥ', divinity: 'śakuntaḥ', meter: 'triṣṭup'},
        {mandala: 2, hymn: 43, verses: 3, seer: 'śaunako gṛtsamadaḥ', divinity: 'śakuntaḥ', meter: 'triṣṭup'},
        
        // MANDALA 3
        {mandala: 3, hymn: 1, verses: 23, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 2, verses: 15, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'jagatiī'},
        {mandala: 3, hymn: 3, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'jagatiī'},
        {mandala: 3, hymn: 4, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: '(1-3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)devyau hotārau,(8)sarasvati-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 5, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 6, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 7, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 8, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'yūpaḥ', meter: '(1-2,4-6,8-11)triṣṭup,(3,7)anuṣṭup'},
        {mandala: 3, hymn: 9, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: '(1-8)bṛhatī,(9)triṣṭup'},
        {mandala: 3, hymn: 10, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'uṣṇik'},
        {mandala: 3, hymn: 11, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 3, hymn: 12, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'indrāgnī', meter: 'gāyatrī'},
        {mandala: 3, hymn: 13, verses: 7, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'anuṣṭup'},
        {mandala: 3, hymn: 14, verses: 7, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 15, verses: 7, seer: 'kātya utkīlaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 16, verses: 6, seer: 'kātya utkīlaḥ', divinity: 'agniḥ', meter: 'bṛhatī'},
        {mandala: 3, hymn: 17, verses: 5, seer: 'vaiśvāmitraḥ kataḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 18, verses: 5, seer: 'vaiśvāmitraḥ kataḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 19, verses: 5, seer: 'kauśiko gāthī', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 20, verses: 5, seer: 'kauśiko gāthī', divinity: '(1,5)viśvedevāḥ,(2-4)agniḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 21, verses: 5, seer: 'kauśiko gāthī', divinity: 'agniḥ', meter: '(1)triṣṭup,(2-3)anuṣṭup,(4)virāṭ,(5)bṛhatī'},
        {mandala: 3, hymn: 22, verses: 5, seer: 'kauśiko gāthī', divinity: 'agniḥ', meter: '(1-3,5)triṣṭup,(4)anuṣṭup'},
        {mandala: 3, hymn: 23, verses: 5, seer: 'bhāratau devaśravodevavatau', divinity: 'agniḥ', meter: '(1-2,4-5)triṣṭup,(3)bṛhatī'},
        {mandala: 3, hymn: 24, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: '(1)anuṣṭup,(2-5)gāyatrī'},
        {mandala: 3, hymn: 25, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: '(1-3,5)agniḥ,(4)indrāgnī', meter: 'virāṭ'},
        {mandala: 3, hymn: 26, verses: 9, seer: '(1-6,8-9)gāthino viśvāmitraḥ,(7)brahma', divinity: '(1-8)agniḥ,(9)viśvāmitropādhyāyaḥ', meter: '(1-6)jagatiī,(7-9)triṣṭup'},
        {mandala: 3, hymn: 27, verses: 15, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 3, hymn: 28, verses: 6, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: '(1-2,6)gāyatrī,(3)uṣṇik,(4)triṣṭup,(5)jagatiī'},
        {mandala: 3, hymn: 29, verses: 16, seer: 'gāthino viśvāmitraḥ', divinity: 'agniḥ', meter: '(1,4,10,12)anuṣṭup,(2,3,5,7-9,13,16)triṣṭup,(6,11,14,15)jagatiī'},
        {mandala: 3, hymn: 30, verses: 22, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 31, verses: 22, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 32, verses: 17, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 33, verses: 13, seer: '(1-3,5,7,9,11-13)gāthino viśvāmitraḥ,(4,6,8,10)nadyaḥ', divinity: '(1-3,5,9,11-13)nadyaḥ,(4,8,10)viśvāmitraḥ,(6,7)indraḥ', meter: '(1-12)triṣṭup,(13)anuṣṭup'},
        {mandala: 3, hymn: 34, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 35, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 36, verses: 11, seer: '(1-9,11)gāthino viśvāmitraḥ,(10)āṅgiraso ghoraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 37, verses: 11, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: '(1-10)gāyatrī,(11)anuṣṭup'},
        {mandala: 3, hymn: 38, verses: 10, seer: 'vaiśvāmitro vācyaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 39, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 40, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 3, hymn: 41, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 3, hymn: 42, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 3, hymn: 43, verses: 8, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 44, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'bṛhatī'},
        {mandala: 3, hymn: 45, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'bṛhatī'},
        {mandala: 3, hymn: 46, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 47, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 48, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 49, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 50, verses: 5, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 51, verses: 12, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: '(1-3)jagatiī,(4-9)triṣṭup,(10-12)gāyatrī'},
        {mandala: 3, hymn: 52, verses: 8, seer: 'gāthino viśvāmitraḥ', divinity: 'indraḥ', meter: '(1-4)gāyatrī,(5,7-8)triṣṭup,(6)jagatiī'},
        {mandala: 3, hymn: 53, verses: 24, seer: 'gāthino viśvāmitraḥ', divinity: '(1)indrāparvatau,(2-14)indraḥ,(15-16)sasarparī vāk,(17-20)rathāṅgāni,(21-24)abhiśāpaḥ', meter: '(1-9,11,14-15,17,19,21,23-24)triṣṭup,(10,16)jagatiī,(12,20,22)anuṣṭup,(13)gāyatrī,(18)bṛhatī'},
        {mandala: 3, hymn: 54, verses: 22, seer: 'vaiśvāmitraḥ vācyaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 55, verses: 22, seer: 'vaiśvāmitraḥ vācyaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 56, verses: 8, seer: 'vaiśvāmitraḥ vācyaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 57, verses: 6, seer: 'gāthino viśvāmitraḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 58, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 3, hymn: 59, verses: 9, seer: 'gāthino viśvāmitraḥ', divinity: 'mitraḥ', meter: '(1-5)triṣṭup,(6-9)gāyatrī'},
        {mandala: 3, hymn: 60, verses: 7, seer: 'gāthino viśvāmitraḥ', divinity: 'ṛbhavaḥ', meter: 'jagatiī'},
        {mandala: 3, hymn: 61, verses: 7, seer: 'gāthino viśvāmitraḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 3, hymn: 62, verses: 18, seer: 'gāthino viśvāmitraḥ', divinity: '(1-3)indrāvaruṇau,(4-6)bṛhaspatiḥ,(7-9)pūṣā,(10-12)savitā,(13-15)somaḥ,(16-18)mitrāvaruṇau', meter: '(1-3)triṣṭup,(4-15)gāyatrī'},
        
        // MANDALA 4
        {mandala: 4, hymn: 1, verses: 20, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: '(1)aṣṭiḥ,(2)atijagatī,(3)dhṛtiḥ,(4-20)triṣṭup'},
        {mandala: 4, hymn: 2, verses: 20, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 3, verses: 16, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 4, verses: 15, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 5, verses: 15, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 6, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 7, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: '(1)jagatī,(2-6)anuṣṭup,(7-11)triṣṭup'},
        {mandala: 4, hymn: 8, verses: 8, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 4, hymn: 9, verses: 8, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 4, hymn: 10, verses: 8, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: '(1-3,5)paṅktiḥ,(4,6,7,8)uṣnik'},
        {mandala: 4, hymn: 11, verses: 6, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 12, verses: 6, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 13, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 14, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 15, verses: 10, seer: 'gautamo vāmadevaḥ', divinity: '(1-6)agniḥ,(7-8)sāhadevyaḥ somakaḥ,(9-10)aśvinau', meter: 'gāyatrī'},
        {mandala: 4, hymn: 16, verses: 21, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 17, verses: 21, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: '(1-14,16-21)triṣṭup,(15)virāṭ'},
        {mandala: 4, hymn: 18, verses: 13, seer: '(1)indraḥ,(2-4,8-13)gautamo vāmadevaḥ,(5-7)aditiḥ', divinity: '(1,5-7)vāmadevaḥ,(2-4,8-13)indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 19, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 20, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 21, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 22, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 23, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 24, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: '(1-9,11)triṣṭup,(10)anuṣṭup'},
        {mandala: 4, hymn: 25, verses: 8, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 26, verses: 7, seer: '(1-3)indraḥ,(4-7)gautamo vāmadevaḥ', divinity: '(1-3)indraḥ,(4-7)śyenaḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 27, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: '(1-4)śyenaḥ,(5)indraḥ', meter: '(1-4)triṣṭup,(5)śakvarī'},
        {mandala: 4, hymn: 28, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 29, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 30, verses: 24, seer: 'gautamo vāmadevaḥ', divinity: '(1-8,12-24)indraḥ,(9-11)indroṣasau', meter: '(1-7,9-23)gāyatrī,(8,24)anuṣṭup'},
        {mandala: 4, hymn: 31, verses: 15, seer: 'gautamo vāmadevaḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 4, hymn: 32, verses: 24, seer: 'gautamo vāmadevaḥ', divinity: '(1-22)indraḥ,(23-24)indrasyāśvau', meter: 'gāyatrī'},
        {mandala: 4, hymn: 33, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'ṛbhavaḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 34, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'ṛbhavaḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 35, verses: 9, seer: 'gautamo vāmadevaḥ', divinity: 'ṛbhavaḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 36, verses: 9, seer: 'gautamo vāmadevaḥ', divinity: 'ṛbhavaḥ', meter: '(1-8)jagatī,(9)triṣṭup'},
        {mandala: 4, hymn: 37, verses: 8, seer: 'gautamo vāmadevaḥ', divinity: 'ṛbhavaḥ', meter: '(1-4)triṣṭup,(5-8)anuṣṭup'},
        {mandala: 4, hymn: 38, verses: 10, seer: 'gautamo vāmadevaḥ', divinity: '(1)dyāvāpṛthivyau,(2-10)dadhikrāḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 39, verses: 6, seer: 'gautamo vāmadevaḥ', divinity: 'dadhikrāḥ', meter: '(1-5)triṣṭup,(6)anuṣṭup'},
        {mandala: 4, hymn: 40, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: '(1-4)dadhikrāḥ,(5)sūryaḥ', meter: '(1)triṣṭup,(2-5)jagatī'},
        {mandala: 4, hymn: 41, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'indrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 4, hymn: 42, verses: 10, seer: 'paurukutsyastrasadasyuḥ', divinity: '(1-6)ātmā,(7-10)indrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 4, hymn: 43, verses: 7, seer: 'sauhotro ajamīḻhaḥ,sauhotraḥ purumīḻhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 4, hymn: 44, verses: 7, seer: 'sauhotro ajamīḻhaḥ,sauhotraḥ purumīḻhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 4, hymn: 45, verses: 7, seer: 'gautamo vāmadevaḥ', divinity: 'aśvinau', meter: '(1-6)jagatī,(7)triṣṭup'},
        {mandala: 4, hymn: 46, verses: 7, seer: 'gautamo vāmadevaḥ', divinity: '(1)vāyuḥ,(2-7)indravāyū', meter: 'gāyatrī'},
        {mandala: 4, hymn: 47, verses: 4, seer: 'gautamo vāmadevaḥ', divinity: '(1)vāyuḥ,(2-4)indravāyū', meter: 'anuṣṭup'},
        {mandala: 4, hymn: 48, verses: 5, seer: 'gautamo vāmadevaḥ', divinity: 'vāyuḥ', meter: 'anuṣṭup'},
        {mandala: 4, hymn: 49, verses: 6, seer: 'gautamo vāmadevaḥ', divinity: 'indrābṛhaspatī', meter: 'gāyatrī'},
        {mandala: 4, hymn: 50, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: '(1-9)bṛhaspatiḥ,(10-11)indrābṛhaspatī', meter: '(1-9,11)triṣṭup,(10)jagatī'},
        {mandala: 4, hymn: 51, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 4, hymn: 52, verses: 7, seer: 'gautamo vāmadevaḥ', divinity: 'uṣāḥ', meter: 'gāyatrī'},
        {mandala: 4, hymn: 53, verses: 7, seer: 'gautamo vāmadevaḥ', divinity: 'savitā', meter: 'jagatī'},
        {mandala: 4, hymn: 54, verses: 6, seer: 'gautamo vāmadevaḥ', divinity: 'savitā', meter: '(1-5)jagatī,(6)triṣṭup'},
        {mandala: 4, hymn: 55, verses: 10, seer: 'gautamo vāmadevaḥ', divinity: 'viṣve devāḥ', meter: '(1-7)triṣṭup,(8-10)gāyatrī'},
        {mandala: 4, hymn: 56, verses: 7, seer: 'gautamo vāmadevaḥ', divinity: 'dyāvāpṛthivyau', meter: '(1-4)triṣṭup,(5-7)gāyatrī'},
        {mandala: 4, hymn: 57, verses: 8, seer: 'gautamo vāmadevaḥ', divinity: '(1-3)kṣetrapatiḥ,(4)śunaḥ,(5,8)śunāsīrau,(6-7)sītā', meter: '(1,4,6-7)anuṣṭup,(2-3,8)triṣṭup,(5)uṣnik'},
        {mandala: 4, hymn: 58, verses: 11, seer: 'gautamo vāmadevaḥ', divinity: 'agniḥ', meter: '(1-10)triṣṭup,(11)jagatī'},
        
        // MANDALA 5
        {mandala: 5, hymn: 1, verses: 12, seer: 'ātreyo budhaḥ,ātreyo gaviṣṭhiraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 2, verses: 12, seer: '(1,3-8,10-12)ātreyaḥ kumāraḥ,(2,9)jāno vṛśaḥ', divinity: 'agniḥ', meter: '(1-11)triṣṭup,(12)śakvarī'},
        {mandala: 5, hymn: 3, verses: 12, seer: 'ātreyo vasuśrutaḥ', divinity: '(1-2,4-12)agniḥ,(3)marudrudraviṣṇavaḥ', meter: '(1)virāṭ,(2-12)triṣṭup'},
        {mandala: 5, hymn: 4, verses: 11, seer: 'ātreyo vasuśrutaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 5, verses: 11, seer: 'ātreyo vasuśrutaḥ', divinity: '(1-3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: 'gāyatrī'},
        {mandala: 5, hymn: 6, verses: 10, seer: 'ātreyo vasuśrutaḥ', divinity: 'agniḥ', meter: 'paṅktiḥ'},
        {mandala: 5, hymn: 7, verses: 10, seer: 'ātreya iṣaḥ', divinity: 'agniḥ', meter: '(1-9)anuṣṭup,(10)paṅktiḥ'},
        {mandala: 5, hymn: 8, verses: 7, seer: 'ātreyo iṣaḥ', divinity: 'agniḥ', meter: 'jagatī'},
        {mandala: 5, hymn: 9, verses: 7, seer: 'ātreyo gayaḥ', divinity: 'agniḥ', meter: '(1-4,6)anuṣṭup,(5,7)paṅktiḥ'},
        {mandala: 5, hymn: 10, verses: 7, seer: 'ātreyo gayaḥ', divinity: 'agniḥ', meter: '(1-3,5-6)anuṣṭup,(4,7)paṅktiḥ'},
        {mandala: 5, hymn: 11, verses: 6, seer: 'ātreyaḥ sutambharaḥ', divinity: 'agniḥ', meter: 'jagatī'},
        {mandala: 5, hymn: 12, verses: 6, seer: 'ātreyaḥ sutambharaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 13, verses: 6, seer: 'ātreyaḥ sutambharaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 5, hymn: 14, verses: 6, seer: 'ātreyaḥ sutambharaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 5, hymn: 15, verses: 5, seer: 'āṅgiraso dharuṇaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 16, verses: 5, seer: 'ātreyaḥ pūruḥ', divinity: 'agniḥ', meter: '(1-4)anuṣṭup,(5)paṅktiḥ'},
        {mandala: 5, hymn: 17, verses: 5, seer: 'ātreyaḥ pūruḥ', divinity: 'agniḥ', meter: '(1-4)anuṣṭup,(5)paṅktiḥ'},
        {mandala: 5, hymn: 18, verses: 5, seer: 'mṛktavāhā ātreyo dvitaḥ', divinity: 'agniḥ', meter: '(1-4)anuṣṭup,(5)paṅktiḥ'},
        {mandala: 5, hymn: 19, verses: 5, seer: 'ātreyo vavriḥ', divinity: 'agniḥ', meter: '(1-2)gāyatrī,(3-4)anuṣṭup,(5)virāṭ'},
        {mandala: 5, hymn: 20, verses: 4, seer: 'ātreyāḥ prayasvantaḥ', divinity: 'agniḥ', meter: '(1-3)anuṣṭup,(4)paṅktiḥ'},
        {mandala: 5, hymn: 21, verses: 4, seer: 'ātreyaḥ sasaḥ', divinity: 'agniḥ', meter: '(1-3)anuṣṭup,(4)paṅktiḥ'},
        {mandala: 5, hymn: 22, verses: 4, seer: 'ātreyo viśvasāmā', divinity: 'agniḥ', meter: '(1-3)anuṣṭup,(4)paṅktiḥ'},
        {mandala: 5, hymn: 23, verses: 4, seer: 'ātreyo viśvacarṣaṇirdyumnaḥ', divinity: 'agniḥ', meter: '(1-3)anuṣṭup,(4)paṅktiḥ'},
        {mandala: 5, hymn: 24, verses: 4, seer: 'bandhuḥ subandhuḥ śrutabandhurviprabandhuśca gaupāyanāḥ', divinity: 'agniḥ', meter: 'virāṭ'},
        {mandala: 5, hymn: 25, verses: 9, seer: 'ātreyāḥ vasūyavaḥ', divinity: 'agniḥ', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 26, verses: 9, seer: 'ātreyāḥ vasūyavaḥ', divinity: '(1-8)agniḥ,(9)viśvedevāḥ', meter: 'gāyatrī'},
        {mandala: 5, hymn: 27, verses: 6, seer: 'bhaumo atriḥ', divinity: '(1-5)agniḥ,(6)indrāgnī', meter: '(1-3)triṣṭup,(4-6)anuṣṭup'},
        {mandala: 5, hymn: 28, verses: 6, seer: 'ātreyī viśvavārā', divinity: 'agniḥ', meter: '(1,3)triṣṭup,(2)jagatī,(4)anuṣṭup,(5-6)gāyatrī'},
        {mandala: 5, hymn: 29, verses: 15, seer: 'śāktyaḥ gaurivītiḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 30, verses: 15, seer: 'ātreyo vabhuḥ', divinity: '(1-11)indraḥ,(12-15)ṛṇañcayendrau', meter: 'triṣṭup'},
        {mandala: 5, hymn: 31, verses: 13, seer: 'ātreya avasyuḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 32, verses: 12, seer: 'ātreyo gātuḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 33, verses: 10, seer: 'prājāpatyaḥ saṁvaraṇaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 34, verses: 9, seer: 'prājāpatyaḥ saṁvaraṇaḥ', divinity: 'indraḥ', meter: '(1-8)jagatī,(9)triṣṭup'},
        {mandala: 5, hymn: 35, verses: 8, seer: 'āṅgirasaḥ prabhūvasuḥ', divinity: 'indraḥ', meter: '(1-7)anuṣṭup,(8)paṅktiḥ'},
        {mandala: 5, hymn: 36, verses: 6, seer: 'āṅgirasaḥ prabhūvasuḥ', divinity: 'indraḥ', meter: '(1-2,4-6)triṣṭup,(3)jagatī'},
        {mandala: 5, hymn: 37, verses: 5, seer: 'bhaumo atriḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 38, verses: 5, seer: 'bhaumo atriḥ', divinity: 'indraḥ', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 39, verses: 5, seer: 'bhaumo atriḥ', divinity: 'indraḥ', meter: '(1-4)anuṣṭup,(5)paṅktiḥ'},
        {mandala: 5, hymn: 40, verses: 9, seer: 'bhaumo atriḥ', divinity: '(1-4)indraḥ,(5)sūryaḥ,(6-9)atriḥ', meter: '(1-3)uṣṇik,(4,6-8)triṣṭup,(5,9)anuṣṭup'},
        {mandala: 5, hymn: 41, verses: 20, seer: 'bhaumo atriḥ', divinity: 'viśvedevāḥ', meter: '(1-15,18-19)triṣṭup,(16-17)jagatī,(20)virāṭ'},
        {mandala: 5, hymn: 42, verses: 18, seer: 'bhaumo atriḥ', divinity: '(1-10,12-18)viśvedevāḥ,(11)rudraḥ', meter: '(1-16,18)triṣṭup,(17)virāṭ'},
        {mandala: 5, hymn: 43, verses: 17, seer: 'bhaumo atriḥ', divinity: 'viśvedevāḥ', meter: '(1-15,17)triṣṭup,(16)virāṭ'},
        {mandala: 5, hymn: 44, verses: 15, seer: 'kāśyapo avatsāraḥ', divinity: 'viśvedevāḥ', meter: '(1-13)jagatī,(14-15)triṣṭup'},
        {mandala: 5, hymn: 45, verses: 11, seer: 'ātreyaḥ sadāpṛṇaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 46, verses: 8, seer: 'ātreyaḥ pratikṣatraḥ', divinity: '(1-6)viśvedevāḥ,(7-8)devapatnyaḥ', meter: '(1,3-7)jagatī,(2,8)triṣṭup'},
        {mandala: 5, hymn: 47, verses: 7, seer: 'ātreyaḥ pratirathaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 48, verses: 5, seer: 'ātreyaḥ pratibhānuḥ', divinity: 'viśvedevāḥ', meter: 'jagatī'},
        {mandala: 5, hymn: 49, verses: 5, seer: 'ātreyaḥ pratiprabhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 50, verses: 5, seer: 'ātreyaḥ svastyātreyaḥ', divinity: 'viśvedevāḥ', meter: '(1-4)anuṣṭup,(5)paṅktiḥ'},
        {mandala: 5, hymn: 51, verses: 15, seer: 'ātreyaḥ svastyātreyaḥ', divinity: '(1-3,8-15)viśvedevāḥ,(4,6-7)indravāyū,(5)vāyuḥ', meter: '(1-4)gāyatrī,(5-10)uṣṇik,(11-13)jagatī,(14-15)anuṣṭup'},
        {mandala: 5, hymn: 52, verses: 17, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1-5,7-15)anuṣṭup,(6,16-17)paṅktiḥ'},
        {mandala: 5, hymn: 53, verses: 16, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1,5,10-11,15)kakubh,(2,6-7,9,13-14,16)bṛhatī,(3)anuṣṭup,(4)uṣṇik,(8,12)gāyatrī'},
        {mandala: 5, hymn: 54, verses: 15, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1-13,15)jagatī,(14)triṣṭup'},
        {mandala: 5, hymn: 55, verses: 10, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1-9)jagatī,(10)triṣṭup'},
        {mandala: 5, hymn: 56, verses: 9, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: 'bṛhatī'},
        {mandala: 5, hymn: 57, verses: 8, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1-6)jagatī,(7-8)triṣṭup'},
        {mandala: 5, hymn: 58, verses: 8, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 59, verses: 8, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1-7)jagatī,(8)triṣṭup'},
        {mandala: 5, hymn: 60, verses: 8, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'marutaḥ', meter: '(1-6)triṣṭup,(7-8)jagatī'},
        {mandala: 5, hymn: 61, verses: 19, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: '(1-4,11-19)marutaḥ,(5-8)tarantamahiṣī śaśīyasī,(9)vaidadaściḥ purumīḻhaḥ,(10)vaidadaściḥ tarantaḥ,(17-19)dārbhyaḥ rathavītiḥ', meter: '(1-4,6-8,10-19)gāyatrī,(5)anuṣṭup,(9)bṛhatī'},
        {mandala: 5, hymn: 62, verses: 9, seer: 'ātreyaḥ śrutavit', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 5, hymn: 63, verses: 7, seer: 'ātreyo arcanānāḥ', divinity: 'mitrāvaruṇau', meter: 'jagatī'},
        {mandala: 5, hymn: 64, verses: 7, seer: 'ātreyo arcanānāḥ', divinity: 'mitrāvaruṇau', meter: '(1-6)anuṣṭup,(7)paṅktiḥ'},
        {mandala: 5, hymn: 65, verses: 6, seer: 'ātreyo rātahavyaḥ', divinity: 'mitrāvaruṇau', meter: '(1-5)anuṣṭup,(6)paṅktiḥ'},
        {mandala: 5, hymn: 66, verses: 6, seer: 'ātreyo rātahavyaḥ', divinity: 'mitrāvaruṇau', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 67, verses: 5, seer: 'ātreyo yajataḥ', divinity: 'mitrāvaruṇau', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 68, verses: 5, seer: 'ātreyo yajataḥ', divinity: 'mitrāvaruṇau', meter: 'gāyatrī'},
        {mandala: 5, hymn: 69, verses: 4, seer: 'ātreya urucakriḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 5, hymn: 70, verses: 4, seer: 'ātreya urucakriḥ', divinity: 'mitrāvaruṇau', meter: 'gāyatrī'},
        {mandala: 5, hymn: 71, verses: 3, seer: 'ātreyo bāhuvṛktaḥ', divinity: 'mitrāvaruṇau', meter: 'gāyatrī'},
        {mandala: 5, hymn: 72, verses: 3, seer: 'ātreyo bāhuvṛktaḥ', divinity: 'mitrāvaruṇau', meter: 'uṣṇik'},
        {mandala: 5, hymn: 73, verses: 10, seer: 'ātreyaḥ pauraḥ', divinity: 'aśvinau', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 74, verses: 10, seer: 'ātreyaḥ pauraḥ', divinity: 'aśvinau', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 75, verses: 9, seer: 'ātreyo avasyuḥ', divinity: 'aśvinau', meter: 'paṅktiḥ'},
        {mandala: 5, hymn: 76, verses: 5, seer: 'bhaumo atriḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 5, hymn: 77, verses: 5, seer: 'bhaumo atriḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 5, hymn: 78, verses: 9, seer: 'ātreyaḥ saptavadhriḥ', divinity: 'aśvinau', meter: '(1-3)uṣṇik,(4)triṣṭup,(5-9)anuṣṭup'},
        {mandala: 5, hymn: 79, verses: 10, seer: 'ātreyaḥ satyaśravāḥ', divinity: 'uṣāḥ', meter: 'paṅktiḥ'},
        {mandala: 5, hymn: 80, verses: 6, seer: 'ātreyaḥ satyaśravāḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 81, verses: 5, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'savitā', meter: 'jagatī'},
        {mandala: 5, hymn: 82, verses: 9, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'savitā', meter: '(1)anuṣṭup,(2-9)gāyatrī'},
        {mandala: 5, hymn: 83, verses: 10, seer: 'bhaumo atriḥ', divinity: 'parjanyaḥ', meter: '(1,5-8,10)triṣṭup,(2-4)jagatī,(9)anuṣṭup'},
        {mandala: 5, hymn: 84, verses: 3, seer: 'bhaumo atriḥ', divinity: 'pṛthivī', meter: 'anuṣṭup'},
        {mandala: 5, hymn: 85, verses: 8, seer: 'bhaumo atriḥ', divinity: 'varuṇaḥ', meter: 'triṣṭup'},
        {mandala: 5, hymn: 86, verses: 6, seer: 'bhaumo atriḥ', divinity: 'indrāgnī', meter: '(1-5)anuṣṭup,(6)virāṭ'},
        {mandala: 5, hymn: 87, verses: 9, seer: 'ātreya evayāmarut', divinity: 'marutaḥ', meter: 'jagatī'},

        // MANDALA 6
        {mandala: 6, hymn: 1, verses: 13, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 2, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1-10)anuṣṭup,(11)śakvarī'},
        {mandala: 6, hymn: 3, verses: 8, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 4, verses: 8, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 5, verses: 7, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 6, verses: 7, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 7, verses: 7, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1-5)triṣṭup,(6-7)jagatī'},
        {mandala: 6, hymn: 8, verses: 7, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1-6)jagatī,(7)triṣṭup'},
        {mandala: 6, hymn: 9, verses: 7, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 10, verses: 7, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1-6)triṣṭup,(7)virāṭ'},
        {mandala: 6, hymn: 11, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 12, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 13, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 14, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1-5)anuṣṭup,(6)śakvarī'},
        {mandala: 6, hymn: 15, verses: 19, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1-2,4-5,7-9)jagatī,(3,15)śakvarī,(6)atiśakvarī,(10-15,16,19)triṣṭup,(17)anuṣṭup,(18)bṛhatī'},
        {mandala: 6, hymn: 16, verses: 48, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'agniḥ', meter: '(1,6)vardhamānā,(2-5,7-26,28-45)gāyatrī,(27,47-48)anuṣṭup,(46)triṣṭup'},
        {mandala: 6, hymn: 17, verses: 15, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 18, verses: 15, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 19, verses: 13, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 20, verses: 13, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: '(1-6,8-13)triṣṭup,(7)virāṭ'},
        {mandala: 6, hymn: 21, verses: 12, seer: 'bārhaspatyo bharadvājaḥ', divinity: '(1-8,10,12)indraḥ,(9,11)viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 22, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 23, verses: 10, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 24, verses: 10, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 25, verses: 9, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 26, verses: 8, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 27, verses: 8, seer: 'bārhaspatyo bharadvājaḥ', divinity: '(1-7)indraḥ,(8)cāyamānasyābhyāvartino dānam', meter: 'triṣṭup'},
        {mandala: 6, hymn: 28, verses: 8, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'gāvaḥ', meter: '(1,5-7)triṣṭup,(2-4)jagatī,(8)anuṣṭup'},
        {mandala: 6, hymn: 29, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 30, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 31, verses: 5, seer: 'bhāradvājaḥ suhotraḥ', divinity: 'indraḥ', meter: '(1-3,5)triṣṭup,(4)śakvarī'},
        {mandala: 6, hymn: 32, verses: 5, seer: 'bhāradvājaḥ suhotraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 33, verses: 5, seer: 'bhāradvājaḥ śunahotraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 34, verses: 5, seer: 'bhāradvājaḥ śunahotraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 35, verses: 5, seer: 'bhāradvājaḥ naraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 36, verses: 5, seer: 'bhāradvājaḥ naraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 37, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 38, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 39, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 40, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 41, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 42, verses: 4, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: '(1-3)anuṣṭup,(4)bṛhatī'},
        {mandala: 6, hymn: 43, verses: 4, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indraḥ', meter: 'uṣṇik'},
        {mandala: 6, hymn: 44, verses: 24, seer: 'bārhaspatyaḥ śaṁyuḥ', divinity: 'indraḥ', meter: '(1-6)anuṣṭup,(7,9-24)triṣṭup,(8)virāṭ'},
        {mandala: 6, hymn: 45, verses: 33, seer: 'bārhaspatyaḥ śaṁyuḥ', divinity: '(1-30)indraḥ,(31-33)bṛbustakṣā', meter: '(1-28,30-32)gāyatrī,(29)atinicṛt,(33)anuṣṭup'},
        {mandala: 6, hymn: 46, verses: 14, seer: 'bārhaspatyaḥ śaṁyuḥ', divinity: 'indraḥ', meter: 'bṛhatī'},
        {mandala: 6, hymn: 47, verses: 31, seer: 'bhāradvājo gargaḥ', divinity: '(1-5)somaḥ,(6-21)indraḥ,(22-25)sārñjayasya prastokasya dānastutiḥ,(26-28)rathaḥ,(29-31)dundubhiḥ', meter: '(1-18,20-22,26,28-31)triṣṭup,(19)bṛhatī,(23)anuṣṭup,(24)gāyatrī,(25)dvipadā triṣṭup,(27)jagatī'},
        {mandala: 6, hymn: 48, verses: 22, seer: 'bārhaspatyaḥ śaṁyuḥ', divinity: '(1-10)agniḥ,(11-15,20-21)marutaḥ,(16-19)pūṣā,(22)dyāvābhūmī', meter: '(1-12)pragāthaḥ,(13,18)uṣṇik,(14,17,19-21)bṛhatī,(15)atijagatī,(16)kakup,(22)anuṣṭup'},
        {mandala: 6, hymn: 49, verses: 15, seer: 'bhāradvāja ṛjiśvā', divinity: 'viśvedevāḥ', meter: '(1-14)triṣṭup,(15)śakvarī'},
        {mandala: 6, hymn: 50, verses: 15, seer: 'bhāradvāja ṛjiśvā', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 51, verses: 16, seer: 'bhāradvāja ṛjiśvā', divinity: 'viśvedevāḥ', meter: '(1-12)triṣṭup,(13-15)uṣṇik,(16)anuṣṭup'},
        {mandala: 6, hymn: 52, verses: 17, seer: 'bhāradvāja ṛjiśvā', divinity: 'viśvedevāḥ', meter: '(1-6,13,15-17)triṣṭup,(7-12)gāyatrī,(14)jagatī'},
        {mandala: 6, hymn: 53, verses: 10, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'pūṣā', meter: '(1-4,9-10)gāyatrī,(5-8)anuṣṭup'},
        {mandala: 6, hymn: 54, verses: 10, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'pūṣā', meter: 'gāyatrī'},
        {mandala: 6, hymn: 55, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'pūṣā', meter: 'gāyatrī'},
        {mandala: 6, hymn: 56, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'pūṣā', meter: '(1-5)gāyatrī,(6)anuṣṭup'},
        {mandala: 6, hymn: 57, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indrāpūṣaṇau', meter: 'gāyatrī'},
        {mandala: 6, hymn: 58, verses: 4, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'pūṣā', meter: '(1,3-4)triṣṭup,(2)jagatī'},
        {mandala: 6, hymn: 59, verses: 10, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indrāgnī', meter: '(1-6)bṛhatī,(7-10)anuṣṭup'},
        {mandala: 6, hymn: 60, verses: 15, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indrāgnī', meter: '(1-3,13)triṣṭup,(4-12)gāyatrī,(14)bṛhatī,(15)anuṣṭup'},
        {mandala: 6, hymn: 61, verses: 14, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'sarasvatī', meter: '(1-3,13)jagatī,(4-12)gāyatrī,(14)triṣṭup'},
        {mandala: 6, hymn: 62, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 6, hymn: 63, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 6, hymn: 64, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 65, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 66, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'marutaḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 67, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 6, hymn: 68, verses: 11, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indrāvaruṇau', meter: '(1-8,11)triṣṭup,(9-10)jagatī'},
        {mandala: 6, hymn: 69, verses: 8, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indrāviṣṇū', meter: 'triṣṭup'},
        {mandala: 6, hymn: 70, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'dyāvāpṛthivyau', meter: 'jagatī'},
        {mandala: 6, hymn: 71, verses: 6, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'savitā', meter: '(1-3)jagatī,(4-6)triṣṭup'},
        {mandala: 6, hymn: 72, verses: 5, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'indrāsomau', meter: 'triṣṭup'},
        {mandala: 6, hymn: 73, verses: 3, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'bṛhaspatiḥ', meter: 'triṣṭup'},
        {mandala: 6, hymn: 74, verses: 4, seer: 'bārhaspatyo bharadvājaḥ', divinity: 'somārudrau', meter: 'triṣṭup'},
        {mandala: 6, hymn: 75, verses: 19, seer: 'bhāradvājaḥ pāyuḥ', divinity: '(1)varma,(2)dhanuḥ,(3)jyā,(4)ārtnī,(5)iṣudhiḥ,(6)sārathiḥ-raśmayaḥ,(7)aśvāḥ,(8)rathaḥ,(9)rathagopāḥ,(10)brāhmaṇapitṛsomadyāvāpṛthivīpūṣāṇaḥ,(11-12,15-16)iṣavaḥ,(13)pratodaḥ,(14)hastaghnaḥ,(17)brahmaṇaspatiḥ,(18)somavaruṇau,(19)brahma', meter: '(1-5,7-9,11,14,18)triṣṭup,(6,10)jagatī,(12-13,15-16,19)anuṣṭup,(17)paṅktiḥ'},
        
        // MANDALA 7
        {mandala: 7, hymn: 1, verses: 25, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: '(1-18)virāṭ,(19-25)triṣṭup'},
        {mandala: 7, hymn: 2, verses: 11, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 3, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 4, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 5, verses: 9, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 6, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 7, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 8, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 9, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 10, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 11, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 12, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 13, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 14, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: '(1)bṛhatī,(2-3)triṣṭup'},
        {mandala: 7, hymn: 15, verses: 15, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 7, hymn: 16, verses: 12, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'pragāthaḥ'},
        {mandala: 7, hymn: 17, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'agniḥ', meter: 'dvipadā triṣṭup'},
        {mandala: 7, hymn: 18, verses: 25, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-21)indraḥ,(22-25)paijavanasya sudāso dānastutiḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 19, verses: 11, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 20, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 21, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 22, verses: 9, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: '(1-8)virāṭ,(9)triṣṭup'},
        {mandala: 7, hymn: 23, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 24, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 25, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 26, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 27, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 28, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 29, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 30, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 31, verses: 12, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: '(1-9)gāyatrī,(10-12)virāṭ'},
        {mandala: 7, hymn: 32, verses: 27, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indraḥ', meter: '(1-2,4-27)pragāthaḥ,(3)dvipadā'},
        {mandala: 7, hymn: 33, verses: 14, seer: '(1-9)maitrāvaruṇirvasiṣṭhaḥ,(10-14)vasiṣṭhaputrāḥ', divinity: '(1-9)vasiṣṭhaputrāḥ,(10-14)vasiṣthaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 34, verses: 25, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-15,18-25)viśvedevāḥ,(16)ahiḥ,(17)ahirbudhnyaḥ', meter: '(1-21)dvipadā virāṭ,(22-25)triṣṭup'},
        {mandala: 7, hymn: 35, verses: 15, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 36, verses: 9, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 37, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 38, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-6)savitā,(7-8)vājinaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 39, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 40, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 41, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: '(1)jagatī,(2-7)triṣṭup'},
        {mandala: 7, hymn: 42, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 43, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 44, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1)viśvedevāḥ,(2-5)dadhikrā', meter: '(1)jagatī,(2-5)triṣṭup'},
        {mandala: 7, hymn: 45, verses: 4, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'savitā', meter: 'triṣṭup'},
        {mandala: 7, hymn: 46, verses: 4, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'rudraḥ', meter: '(1-3)jagatī,(4)triṣṭup'},
        {mandala: 7, hymn: 47, verses: 4, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'āpaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 48, verses: 4, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-3)ṛbhavaḥ,(4)viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 49, verses: 4, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'āpaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 50, verses: 4, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1)mitrāvaruṇau,(2)agniḥ,(3)viśvedevāḥ,(4)nadyaḥ', meter: '(1-3)jagatī,(4)śakvarī'},
        {mandala: 7, hymn: 51, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'ādityāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 52, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'ādityāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 53, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'dyāvāpṛthivyau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 54, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'vāstoṣpatiḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 55, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1)vāstoṣpatiḥ,(2-8)indraḥ', meter: '(1)gāyatrī,(2-4)bṛhatī,(5-8)anuṣṭup'},
        {mandala: 7, hymn: 56, verses: 25, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'marutaḥ', meter: '(1-11)dvipadā virāṭ,(12-25)triṣṭup'},
        {mandala: 7, hymn: 57, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'marutaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 58, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'marutaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 59, verses: 12, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-11)marutaḥ,(12)rudraḥ', meter: '(1-6)pragāthaḥ,(7-8)triṣṭup,(9-11)gāyatrī,(12)anuṣṭup'},
        {mandala: 7, hymn: 60, verses: 12, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1)sūryaḥ,(2-12)mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 61, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 62, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-3)sūryaḥ,(4-6)mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 63, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-4,5)sūryaḥ,(5-6)mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 64, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 65, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'mitrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 66, verses: 19, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-3,17-19)mitrāvaruṇau,(4-13)ādityāḥ,(14-16)sūryaḥ', meter: '(1-9,17,19)gāyatrī,(10-15)pragāthaḥ,(16)uṣṇik'},
        {mandala: 7, hymn: 67, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 68, verses: 9, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: '(1-7)virāṭ,(8-9)triṣṭup'},
        {mandala: 7, hymn: 69, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 70, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 71, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 72, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 73, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 74, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'aśvinau', meter: 'pragāthaḥ'},
        {mandala: 7, hymn: 75, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 76, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 77, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 78, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 79, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 80, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 81, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'uṣāḥ', meter: 'pragāthaḥ'},
        {mandala: 7, hymn: 82, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indrāvaruṇau', meter: 'jagatī'},
        {mandala: 7, hymn: 83, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indrāvaruṇau', meter: 'jagatī'},
        {mandala: 7, hymn: 84, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indrāvaruṇau', meter: 'triṣṭup'},
        {mandala: 7, hymn: 85, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'varuṇaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 86, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'varuṇaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 87, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'varuṇaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 88, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'varuṇaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 89, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'varuṇaḥ', meter: '(1-4)gāyatrī,(5)jagatī'},
        {mandala: 7, hymn: 90, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-4)vāyuḥ,(5-7)indravāyū', meter: 'triṣṭup'},
        {mandala: 7, hymn: 91, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1,3)vāyuḥ,(2,4-7)indravāyū', meter: 'triṣṭup'},
        {mandala: 7, hymn: 92, verses: 5, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1,3,5)vāyuḥ,(2,4)indravāyū', meter: 'triṣṭup'},
        {mandala: 7, hymn: 93, verses: 8, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indrāgnī', meter: 'triṣṭup'},
        {mandala: 7, hymn: 94, verses: 12, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'indrāgnī', meter: '(1-11)gāyatrī,(12)anuṣṭup'},
        {mandala: 7, hymn: 95, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-2,4-6)sarasvatī,(3)sarasvān', meter: 'triṣṭup'},
        {mandala: 7, hymn: 96, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-3)sarasvatī,(4-6)sarasvān', meter: '(1-2)pragāthaḥ,(3)prastārapaṅktiḥ,(4-6)gāyatrī'},
        {mandala: 7, hymn: 97, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1)indraḥ,(2,4-8)bṛhaspatiḥ,(3,9)indrābrahmaṇaspatī,(10)indrābṛhaspatī', meter: 'triṣṭup'},
        {mandala: 7, hymn: 98, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-6)indraḥ,(7)indrābṛhaspatī', meter: 'triṣṭup'},
        {mandala: 7, hymn: 99, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-3,7)viṣṇuḥ,(4-6)indrāviṣṇū', meter: 'triṣṭup'},
        {mandala: 7, hymn: 100, verses: 7, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'viṣṇuḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 101, verses: 6, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'parjanyaḥ', meter: 'triṣṭup'},
        {mandala: 7, hymn: 102, verses: 3, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'parjanyaḥ', meter: 'gāyatrī'},
        {mandala: 7, hymn: 103, verses: 10, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: 'maṇḍūkāḥ', meter: '(1)anuṣṭup,(2-10)triṣṭup'},
        {mandala: 7, hymn: 104, verses: 25, seer: 'maitrāvaruṇirvasiṣṭhaḥ', divinity: '(1-7,15,24-25)indrāsomau,(8,16,19-22)indraḥ,(9,12-13)somaḥ,(10,14)agniḥ,(11)devāḥ,(17)grāvāṇaḥ,(18)marutaḥ,(23)pṛthivyantarikṣe', meter: '(1,6,18,21,23)jagatī,(7)jagatī,(8-17,19-20,22,24)triṣṭup,(25)anuṣṭup'},

        // MANDALA 8
        {mandala: 8, hymn: 1, verses: 34, seer: '(1-2)ghauraḥ pragāthaḥ,(3-29)kāṇvau medhātithimedhyātithī,(30-33)plāyoṅgirāsaṅga,(34)āṅgirasī śaśvatī', divinity: '(1-29)indraḥ,(30-34)asaṅgaḥ', meter: '(1-4)pragāthaḥ,(5-32)bṛhatī,(33-34)triṣṭup'},
        {mandala: 8, hymn: 2, verses: 42, seer: 'kāṇvo medhātithiḥ', divinity: '(1-40)indraḥ,(41-42)dānastutiḥ', meter: '(1-27,29-42)gāyatrī,(28)anuṣṭup'},
        {mandala: 8, hymn: 3, verses: 24, seer: 'kāṇvo medhyātithiḥ', divinity: '(1-20)indraḥ,(21-24)dānastutiḥ', meter: '(1-20)pragāthaḥ,(21)anuṣṭup,(22-23)gāyatrī,(24)bṛhatī'},
        {mandala: 8, hymn: 4, verses: 21, seer: 'kāṇvo devātithiḥ', divinity: '(1-14)indraḥ,(15-18)pūṣā,(19-21)dānastutiḥ', meter: '(1-20)pragāthaḥ,(21)uṣṇik'},
        {mandala: 8, hymn: 5, verses: 39, seer: 'kāṇvaḥ brahmātithiḥ', divinity: '(1-36)aśvinau,(37-39)dānastutiḥ', meter: '(1-36)gāyatrī,(37-38)bṛhatī,(39)anuṣṭup'},
        {mandala: 8, hymn: 6, verses: 48, seer: 'kāṇvo vatsaḥ', divinity: '(1-45)indraḥ,(46-48)dānastutiḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 7, verses: 36, seer: 'kāṇvaḥ punarvatsaḥ', divinity: 'marutaḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 8, verses: 23, seer: 'kāṇvaḥ sadhvaṁsaḥ', divinity: 'aśvinau', meter: 'anuṣṭup'},
        {mandala: 8, hymn: 9, verses: 21, seer: 'kāṇvaḥ śaśakarṇaḥ', divinity: 'aśvinau', meter: '(1,4,6,14-15)bṛhatī,(2-3,20-21)gāyatrī,(5)kakup,(7-9,13,16-19)anuṣṭup,(10)triṣṭup,(11)virāṭ,(12)jagatī'},
        {mandala: 8, hymn: 10, verses: 6, seer: 'ghauraḥ pragāthaḥ', divinity: 'aśvinau', meter: '(1)bṛhatī,(2)triṣṭup,(3)anuṣṭup,(4)paṅktiḥ,(5-6)pragāthaḥ'},
        {mandala: 8, hymn: 11, verses: 10, seer: 'kāṇvo vatsaḥ', divinity: 'agniḥ', meter: '(1-9)gāyatrī,(10)triṣṭup'},
        {mandala: 8, hymn: 12, verses: 33, seer: 'kāṇvaḥ parvataḥ', divinity: 'indraḥ', meter: 'uṣṇik'},
        {mandala: 8, hymn: 13, verses: 33, seer: 'kāṇvo nāradaḥ', divinity: 'indraḥ', meter: 'uṣṇik'},
        {mandala: 8, hymn: 14, verses: 15, seer: 'kāṇvāyanau goṣūktyaśvasūktinau', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 15, verses: 13, seer: 'kāṇvāyanau goṣūktyaśvasūktinau', divinity: 'indraḥ', meter: 'uṣṇik'},
        {mandala: 8, hymn: 16, verses: 12, seer: 'kāṇva irimbiṭhiḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 17, verses: 15, seer: 'kāṇva irimbiṭhiḥ', divinity: '(1-13,15)indraḥ,(14)vāstoṣpatiḥ', meter: '(1-13)gāyatrī,(14-15)pragāthaḥ'},
        {mandala: 8, hymn: 18, verses: 22, seer: 'kāṇva irimbiṭhiḥ', divinity: '(1-3,5,10-22)ādityāḥ,(4,6-7)aditiḥ,(8)aśvinau,(9)agnisūryānilāḥ', meter: 'uṣṇik'},
        {mandala: 8, hymn: 19, verses: 37, seer: 'kāṇvaḥ sobhariḥ', divinity: '(1-33)agniḥ,(34-35)ādityāḥ,(36-37)dānastutiḥ', meter: '(1-23,28-33)pragāthaḥ,(27)dvipadā virāṭ,(34)uṣṇik,(35)bṛhatī,(36)kakup,(37)paṅktiḥ'},
        {mandala: 8, hymn: 20, verses: 26, seer: 'kāṇvaḥ sobhariḥ', divinity: 'marutaḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 21, verses: 18, seer: 'kāṇvaḥ sobhariḥ', divinity: '(1-16)indraḥ,(17-18)dānastutiḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 22, verses: 18, seer: 'kāṇvaḥ sobhariḥ', divinity: 'aśvinau', meter: '(1-6)pragāthaḥ,(7)bṛhatī,(8)anuṣṭup,(9-10,13-18)pragāthaḥ,(11)kakup,(12)triṣṭup'},
        {mandala: 8, hymn: 23, verses: 30, seer: 'vaiyaśvo viśvamanāḥ', divinity: 'agniḥ', meter: 'uṣṇik'},
        {mandala: 8, hymn: 24, verses: 30, seer: 'vaiyaśvo viśvamanāḥ', divinity: '(1-27)indraḥ,(28-30)dānastutiḥ', meter: '(1-29)uṣṇik,(30)anuṣṭup'},
        {mandala: 8, hymn: 25, verses: 24, seer: 'vaiyaśvo viśvamanāḥ', divinity: '(1-9,13-24)mitrāvaruṇau,(10-12)viśvedevāḥ', meter: 'uṣṇik'},
        {mandala: 8, hymn: 26, verses: 25, seer: 'vaiyaśvo viśvamanāḥ', divinity: '(1-19)aśvinau,(20-25)vāyuḥ', meter: '(1-15,22-24)uṣṇik,(16-19,21,25)gāyatrī,(20)anuṣṭup'},
        {mandala: 8, hymn: 27, verses: 22, seer: 'vaivasvasto manuḥ', divinity: 'viśvedevāḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 28, verses: 5, seer: 'vaivasvasto manuḥ', divinity: 'viśvedevāḥ', meter: '(1-3,5)gāyatrī,(4)uṣṇik'},
        {mandala: 8, hymn: 29, verses: 10, seer: 'vaivasvasto manuḥ', divinity: 'viśvedevāḥ', meter: 'dvipadā virāṭ'},
        {mandala: 8, hymn: 30, verses: 4, seer: 'vaivasvasto manuḥ', divinity: 'viśvedevāḥ', meter: '(1)gāyatrī,(2)uṣṇik,(3)bṛhatī,(4)anuṣṭup'},
        {mandala: 8, hymn: 31, verses: 18, seer: 'vaivasvasto manuḥ', divinity: '(1-4)yajñayajamānau,(5-9)dampatī,(10-18)dampatyāśipaḥ', meter: '(1-8,10-13)gāyatrī,(9,14)anuṣṭup,(15-18)paṅktiḥ'},
        {mandala: 8, hymn: 32, verses: 30, seer: 'kāṇvo medhātithiḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 33, verses: 19, seer: 'kāṇvo medhyātithiḥ', divinity: 'indraḥ', meter: '(1-15)bṛhatī,(13-18)gāyatrī,(19)anuṣṭup'},
        {mandala: 8, hymn: 34, verses: 18, seer: '(1-15)kāṇvo nīpātithiḥ,(16-18)āṅgirasāḥ sahasraṁ vasurociṣaḥ', divinity: 'indraḥ', meter: '(1-15)anuṣṭup,(16-18)gāyatrī'},
        {mandala: 8, hymn: 35, verses: 24, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'aśvinau', meter: '(1-21)jyotiḥ,(22,24)paṅktiḥ,(23)mahābṛhatī'},
        {mandala: 8, hymn: 36, verses: 7, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'indraḥ', meter: '(1-6)śakvarī,(7)mahāpaṅktiḥ'},
        {mandala: 8, hymn: 37, verses: 7, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'indraḥ', meter: '(1)atijagatī,(2-7)mahāpaṅktiḥ'},
        {mandala: 8, hymn: 38, verses: 10, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'indrāgnī', meter: 'gāyatrī'},
        {mandala: 8, hymn: 39, verses: 10, seer: 'kāṇvo nābhākaḥ', divinity: 'agniḥ', meter: 'mahāpaṅktiḥ'},
        {mandala: 8, hymn: 40, verses: 12, seer: 'kāṇvo nābhākaḥ', divinity: 'indrāgnī', meter: '(1,3-11)mahāpaṅktiḥ,(2)śakvarī,(12)triṣṭup'},
        {mandala: 8, hymn: 41, verses: 10, seer: 'kāṇvo nābhākaḥ', divinity: 'varuṇaḥ', meter: 'mahāpaṅktiḥ'},
        {mandala: 8, hymn: 42, verses: 6, seer: 'kāṇvo nābhākaḥ', divinity: '(1-3)varuṇaḥ,(4-6)aśvinau', meter: '(1-3)triṣṭup,(4-6)anuṣṭup'},
        {mandala: 8, hymn: 43, verses: 33, seer: 'āṅgiraso virūpaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 44, verses: 30, seer: 'āṅgiraso virūpaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 45, verses: 42, seer: 'kāṇvastriśokaḥ', divinity: '(1)agnīndrau,(2-42)indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 46, verses: 33, seer: 'āśvyo vaśaḥ', divinity: '(1-20,29-31,33)indraḥ,(21-24)dānastutiḥ,(25-28,32)vāyuḥ', meter: '(1-4,6,10,23,29,33)gāyatrī,(5)kakup,(7,9,14,18-20)bṛhatī,(8)anuṣṭup,(11-12,25-28)pragāthaḥ,(13,17)jagatī,(15)kakumnyaṅkuśirā,(16,30)virāṭ,(21-22,24,32)paṅktiḥ,(31)uṣṇik'},
        {mandala: 8, hymn: 47, verses: 18, seer: 'āptyastritaḥ', divinity: '(1-13)ādityāḥ,(14-18)ādityoṣasaḥ', meter: 'mahāpaṅktiḥ'},
        {mandala: 8, hymn: 48, verses: 15, seer: 'kāṇvaḥ pragāthaḥ', divinity: 'somaḥ', meter: '(1-4,6-15)triṣṭup,(5)jagatī'},
        {mandala: 8, hymn: 49, verses: 10, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 50, verses: 10, seer: 'kāṇvaḥ puṣṭiguḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 51, verses: 10, seer: 'kāṇvaḥ śruṣṭiguḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 52, verses: 10, seer: 'kāṇva āyuḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 53, verses: 8, seer: 'kāṇvo medhyaḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 54, verses: 8, seer: 'kāṇvo mātariśvā', divinity: '(1-2,5-8)indraḥ,(3-4)viśvedevāḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 55, verses: 5, seer: 'kāṇvaḥ kṛśaḥ', divinity: 'dānastutiḥ', meter: '(1-2,4)gāyatrī,(3,5)anuṣṭup'},
        {mandala: 8, hymn: 56, verses: 5, seer: 'kāṇvaḥ pṛṣadhraḥ', divinity: '(1-4)dānastutiḥ,(5)agnisūyau', meter: '(1-4)gāyatrī,(5)paṅktiḥ'},
        {mandala: 8, hymn: 57, verses: 4, seer: 'kāṇvo medhyaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 8, hymn: 58, verses: 3, seer: 'kāṇvo medhyaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 8, hymn: 59, verses: 7, seer: 'kāṇvaḥ suparṇaḥ', divinity: 'indrāvaruṇau', meter: 'jagatī'},
        {mandala: 8, hymn: 60, verses: 20, seer: 'prāgātho bhargaḥ', divinity: 'agniḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 61, verses: 18, seer: 'prāgātho bhargaḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 62, verses: 12, seer: 'kāṇvaḥ pragāthaḥ', divinity: 'indraḥ', meter: '(1-6,10-12)paṅktiḥ,(7-9)bṛhatī'},
        {mandala: 8, hymn: 63, verses: 12, seer: 'kāṇvaḥ pragāthaḥ', divinity: 'indraḥ', meter: '(1,4-5,7)anuṣṭup,(2-3,6,8-11)gāyatrī,(12)triṣṭup'},
        {mandala: 8, hymn: 64, verses: 12, seer: 'kāṇvaḥ pragāthaḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 65, verses: 12, seer: 'kāṇvaḥ pragāthaḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 66, verses: 15, seer: 'prāgāthaḥ kaliḥ', divinity: 'indraḥ', meter: '(1-14)pragāthaḥ,(15)anuṣṭup'},
        {mandala: 8, hymn: 67, verses: 21, seer: 'sāmmado matysaḥ', divinity: 'ādityāḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 68, verses: 19, seer: 'āṅgirasaḥ priyamedhaḥ', divinity: '(1-13)indraḥ,(14-19)dānastutiḥ', meter: '(1-12)pragāthaḥ,(13-19)gāyatrī'},
        {mandala: 8, hymn: 69, verses: 18, seer: 'āṅgirasaḥ priyamedhaḥ', divinity: '(1-10,13-18)indraḥ,(11)viśvedevāḥ,(12)varuṇaḥ', meter: '(1,3,7-10,12-15)anuṣṭup,(2)uṣṇik,(4-6)gāyatrī,(11,16)paṅktiḥ,(17-18)bṛhatī'},
        {mandala: 8, hymn: 70, verses: 15, seer: 'āṅgirasaḥ puruhanmā', divinity: 'indraḥ', meter: '(1-6)pragāthaḥ,(7-12)bṛhatī,(13)uṣṇik,(14)anuṣṭup,(15)pura uṣṇik'},
        {mandala: 8, hymn: 71, verses: 15, seer: 'āṅgirasau sudītipurumīḻhau', divinity: 'agniḥ', meter: '(1-9)gāyatrī,(10-15)pragāthaḥ'},
        {mandala: 8, hymn: 72, verses: 18, seer: 'prāgātho haryataḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 73, verses: 18, seer: 'gopavanaḥ saptavadhriḥ', divinity: 'aśvinau', meter: 'gāyatrī'},
        {mandala: 8, hymn: 74, verses: 15, seer: 'ātreyo gopavanaḥ', divinity: '(1-12)agniḥ,(13-15)dānastutiḥ', meter: '(1-12)pragāthaḥ,(13-15)anuṣṭup'},
        {mandala: 8, hymn: 75, verses: 16, seer: 'āṅgiraso virūpaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 76, verses: 12, seer: 'kāṇvaḥ kurusutiḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 77, verses: 11, seer: 'kāṇvaḥ kurusutiḥ', divinity: 'indraḥ', meter: '(1-9)gāyatrī,(10-11)pragāthaḥ'},
        {mandala: 8, hymn: 78, verses: 10, seer: 'kāṇvaḥ kurusutiḥ', divinity: 'indraḥ', meter: '(1-9)gāyatrī,(10)bṛhatī'},
        {mandala: 8, hymn: 79, verses: 9, seer: 'bhārgavaḥ kṛtnuḥ', divinity: 'somaḥ', meter: '(1-8)gāyatrī,(9)anuṣṭup'},
        {mandala: 8, hymn: 80, verses: 10, seer: 'naudhasa ekadyūḥ', divinity: 'indraḥ', meter: '(1-9)gāyatrī,(10)triṣṭup'},
        {mandala: 8, hymn: 81, verses: 9, seer: 'kāṇvaḥ kusīdī', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 82, verses: 9, seer: 'kāṇvaḥ kusīdī', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 83, verses: 9, seer: 'kāṇvaḥ kusīdī', divinity: 'viśvedevāḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 84, verses: 9, seer: 'kāvya uśanāḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 85, verses: 9, seer: 'āṅgirasaḥ kṛṣṇaḥ', divinity: 'aśvinau', meter: 'gāyatrī'},
        {mandala: 8, hymn: 86, verses: 5, seer: 'āṅgirasaḥ kṛṣṇaḥ', divinity: 'aśvinau', meter: 'jagatī'},
        {mandala: 8, hymn: 87, verses: 6, seer: 'vāsiṣṭho dyumnīkaḥ', divinity: 'aśvinau', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 88, verses: 6, seer: 'gautamo nodhāḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 89, verses: 7, seer: 'āṅgirasau nṛmedhapurumedhau', divinity: 'indraḥ', meter: '(1-4)pragāthaḥ,(5-6)anuṣṭup,(7)bṛhatī'},
        {mandala: 8, hymn: 90, verses: 6, seer: 'āṅgirasau nṛmedhapurumedhau', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 91, verses: 7, seer: 'ātreyyapālā', divinity: 'indraḥ', meter: '(1-2)paṅktiḥ,(3-7)anuṣṭup'},
        {mandala: 8, hymn: 92, verses: 33, seer: 'āṅgirasaḥ śrutakakṣaḥ', divinity: 'indraḥ', meter: '(1)anuṣṭup,(2-33)gāyatrī'},
        {mandala: 8, hymn: 93, verses: 34, seer: 'āṅgirasaḥ sukakṣaḥ', divinity: '(1-33)indraḥ,(34)ṛbhavaḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 94, verses: 12, seer: 'āṅgiraso binduḥ', divinity: 'marutaḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 95, verses: 9, seer: 'āṅgirasas tiraścīḥ', divinity: 'indraḥ', meter: 'anuṣṭup'},
        {mandala: 8, hymn: 96, verses: 21, seer: 'āṅgirasas tiraścīḥ', divinity: '(1-13,16-21)indraḥ,(14)marutaḥ,(15)indrābṛhaspatī', meter: '(1-3,5-21)triṣṭup,(4)virāṭ'},
        {mandala: 8, hymn: 97, verses: 15, seer: 'kāśyapo rebhaḥ', divinity: 'indraḥ', meter: '(1-9)bṛhatī,(10,13)atijagatī,(11-12)bṛhatī,(14)triṣṭup,(15)jagatī'},
        {mandala: 8, hymn: 98, verses: 12, seer: 'āṅgiraso nṛmedhaḥ', divinity: 'indraḥ', meter: '(1-6,8-9,12)uṣṇik,(7,10-11)kakup'},
        {mandala: 8, hymn: 99, verses: 8, seer: 'āṅgiraso nṛmedhaḥ', divinity: 'indraḥ', meter: 'pragāthaḥ'},
        {mandala: 8, hymn: 100, verses: 12, seer: '(1-3,6-12)bhāgavo nemaḥ,(4-5)indraḥ', divinity: '(1-9,12)indraḥ,(10-11)vāk', meter: '(1-5,10-12)triṣṭup,(6)jagatī,(7-9)anuṣṭup'},
        {mandala: 8, hymn: 101, verses: 16, seer: 'bhārgavo jamadagniḥ', divinity: '(1-4,5)mitrāvaruṇau,(5-6)ādityāḥ,(7-8)aśvinau,(9-10)vāyuḥ,(11-12)sūryaḥ,(13)uṣāḥ,(14)pavamānaḥ,(15-16)gauḥ', meter: '(1-2,5-12)pragāthaḥ,(3)gāyatrī,(4,13)bṛhatī,(14-16)triṣṭup'},
        {mandala: 8, hymn: 102, verses: 22, seer: 'bhārgavaḥ prayogaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 8, hymn: 103, verses: 14, seer: 'kāṇvaḥ sobhariḥ', divinity: '(1-13)agniḥ,(14)agnāmarutaḥ', meter: '(1-4,6-7,9,11,13)bṛhatī,(5)virāṭ,(8,12)kakup,(10)gāyatrī,(14)anuṣṭup'},

        // MANDALA 9
        {mandala: 9, hymn: 1, verses: 10, seer: 'vaiśvāmitro madhucchandāḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 2, verses: 10, seer: 'kāṇvo medhātithiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 3, verses: 10, seer: 'ājīgartiḥ śunaḥśepaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 4, verses: 10, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 5, verses: 11, seer: 'kāśyapo asitaḥ', divinity: '(1,2,3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: '(1-7)gāyatrī,(8-11)anuṣṭup'},
        {mandala: 9, hymn: 6, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 7, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 8, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 9, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 10, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 11, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 12, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 13, verses: 9, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 14, verses: 8, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 15, verses: 8, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 16, verses: 8, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 17, verses: 8, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 18, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 19, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 20, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 21, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 22, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 23, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 24, verses: 7, seer: 'kāśyapo asitaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 25, verses: 6, seer: 'āgastyo dṛḻhacyutaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 26, verses: 6, seer: 'dārḻhacyuta idhmavāhaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 27, verses: 6, seer: 'āṅgiraso nṛmedhaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 28, verses: 6, seer: 'āṅgiraso priyamedhaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 29, verses: 6, seer: 'āṅgiraso nṛmedhaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 30, verses: 6, seer: 'āṅgiraso binduḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 31, verses: 6, seer: 'rāhūgaṇo gotamaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 32, verses: 6, seer: 'ātreyaḥ śyāvāśvaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 33, verses: 6, seer: 'āptyastritaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 34, verses: 6, seer: 'āptyastritaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 35, verses: 6, seer: 'āṅgirasaḥ prabhūvasuḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 36, verses: 6, seer: 'āṅgirasaḥ prabhūvasuḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 37, verses: 6, seer: 'āṅgiraso rahūgaṇaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 38, verses: 6, seer: 'āṅgiraso rahūgaṇaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 39, verses: 6, seer: 'āṅgiraso bṛhanmatiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 40, verses: 6, seer: 'āṅgiraso bṛhanmatiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 41, verses: 6, seer: 'kāṇvo medhyātithiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 42, verses: 6, seer: 'kāṇvo medhyātithiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 43, verses: 6, seer: 'kāṇvo medhyātithiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 44, verses: 6, seer: 'āṅgirasa ayāsyaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 45, verses: 6, seer: 'āṅgirasa ayāsyaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 46, verses: 6, seer: 'āṅgirasa ayāsyaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 47, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 48, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 49, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 50, verses: 5, seer: 'āṅgirasa ucathyaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 51, verses: 5, seer: 'āṅgirasa ucathyaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 52, verses: 5, seer: 'āṅgirasa ucathyaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 53, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 54, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 55, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 56, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 57, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 58, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 59, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 60, verses: 4, seer: 'kāśyapo avatsāraḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-2,4)gāyatrī,(3)uṣṇik'},
        {mandala: 9, hymn: 61, verses: 30, seer: 'āṅgiraso amahīyuḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 62, verses: 30, seer: 'bhārgavo jamadagniḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 63, verses: 30, seer: 'kāśyapo nidhruviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 64, verses: 30, seer: 'mārīcāḥ kaśyapaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 65, verses: 30, seer: 'vāruṇirbhṛguḥ', divinity: 'pavamānaḥ somaḥ', meter: 'gāyatrī'},
        {mandala: 9, hymn: 66, verses: 30, seer: 'śataṁ vaikhānasāḥ', divinity: '(1-18,22-30)pavamānaḥ somaḥ,(19-21)pavamāno agniḥ', meter: '(1-17,19-30)gāyatrī,(18)anuṣṭup'},
        {mandala: 9, hymn: 67, verses: 32, seer: 'saptarṣayaḥ', divinity: '(1-22,28-30)pavamānaḥ somaḥ,(23-27)pavamāno agniḥ,(31-32)adhyetṛstutiḥ', meter: '(1-26,28-29)gāyatrī,(27,31-32)anuṣṭup,(30)uṣṇik'},
        {mandala: 9, hymn: 68, verses: 10, seer: 'bhālandano vatsapriḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-9)jagatī,(10)triṣṭup'},
        {mandala: 9, hymn: 69, verses: 10, seer: 'āṅgiraso hiraṇyastūpaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-8)jagatī,(9-10)triṣṭup'},
        {mandala: 9, hymn: 70, verses: 10, seer: 'vaiśvāmitro reṇuḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-9)jagatī,(10)triṣṭup'},
        {mandala: 9, hymn: 71, verses: 9, seer: 'vaiśvāmitra ṛbhavaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-8)jagatī,(9)triṣṭup'},
        {mandala: 9, hymn: 72, verses: 9, seer: 'āṅgiraso harimantaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 73, verses: 9, seer: 'āṅgirasaḥ pavitraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 74, verses: 9, seer: 'dairghatamasaḥ kakṣīvān', divinity: 'pavamānaḥ somaḥ', meter: '(1-7,9)jagatī,(8)triṣṭup'},
        {mandala: 9, hymn: 75, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 76, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 77, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 78, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 79, verses: 5, seer: 'bhārgavaḥ kaviḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 80, verses: 5, seer: 'bhāradvājo vasuḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 81, verses: 5, seer: 'bhāradvājo vasuḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-4)jagatī,(5)triṣṭup'},
        {mandala: 9, hymn: 82, verses: 5, seer: 'bhāradvājo vasuḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-4)jagatī,(5)triṣṭup'},
        {mandala: 9, hymn: 83, verses: 5, seer: 'āṅgirasaḥ pavitraḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 84, verses: 5, seer: 'vācyaḥ prajāpatiḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 85, verses: 12, seer: 'bhārgavo venaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-10)jagatī,(11-12)triṣṭup'},
        {mandala: 9, hymn: 86, verses: 48, seer: '(1-10)akṛṣṭā māṣāḥ,(11-20)sikatā nivāvarī,(21-30)pṛśnayo ajāḥ,(31-40)atreyaḥ,(41-45)bhaumo atriḥ,(46-48)śaunako gṛtsamadaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'jagatī'},
        {mandala: 9, hymn: 87, verses: 9, seer: 'kāvya uśanāḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 88, verses: 8, seer: 'kāvya uśanāḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 89, verses: 7, seer: 'kāvya uśanāḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 90, verses: 6, seer: 'maitrāvaruṇirvasiṭḥaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 91, verses: 6, seer: 'mārīcaḥ kaśyapaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 92, verses: 6, seer: 'mārīcaḥ kaśyapaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 93, verses: 5, seer: 'gautamo nodhāḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 94, verses: 5, seer: 'āṅgirasaḥ kaṇvaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 95, verses: 5, seer: 'kāṇvaḥ praskaṇvaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 96, verses: 24, seer: 'daivodāsiḥ pratardanaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 97, verses: 58, seer: '(1-3)maitrāvaruṇirvasiṭḥaḥ,(4-6)vāsiṣṭha indrapramatiḥ,(7-9)vāsiṣṭho vṛṣagaṇaḥ,(10-12)vāsiṣṭho manyuḥ,(13-15)vāsiṣṭho upamanyuḥ,(16-18)vāsiṣṭho vyāghrapāt,(19-21)vāsiṣṭhaḥ śaktiḥ,(22-24)vāsiṣṭhaḥ karṇaśrut,(25-27)vāsiṣṭho mṛḻīkaḥ,(28-30)vāsiṣṭho vasukraḥ,(31-44)śāktyaḥ parāśaraḥ,(45-58)āṅgirasaḥ kutsaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'triṣṭup'},
        {mandala: 9, hymn: 98, verses: 12, seer: 'vārṣāgiro ambarīṣaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-10,12)anuṣṭup,(11)bṛhatī'},
        {mandala: 9, hymn: 99, verses: 8, seer: 'kāśyapau rebhasūnū', divinity: 'pavamānaḥ somaḥ', meter: '(1)bṛhatī,(2-8)anuṣṭup'},
        {mandala: 9, hymn: 100, verses: 9, seer: 'kāśyapo rebhasūnū', divinity: 'pavamānaḥ somaḥ', meter: 'anuṣṭup'},
        {mandala: 9, hymn: 101, verses: 16, seer: '(1-3)śyāvāśvirandhīguḥ,(4-6)nāhuṣo yayāti,(7-9)mānavo nahuṣaḥ,(10-12)sāṁvaraṇo manuḥ,(13-16)vaiśvāmitro vācyaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1,4-16)anuṣṭup,(2-3)gāyatrī'},
        {mandala: 9, hymn: 102, verses: 8, seer: 'āptyastritaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'uṣṇik'},
        {mandala: 9, hymn: 103, verses: 6, seer: 'āptyastritaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'uṣṇik'},
        {mandala: 9, hymn: 104, verses: 6, seer: 'kāṇvau parvatanāradau', divinity: 'pavamānaḥ somaḥ', meter: 'uṣṇik'},
        {mandala: 9, hymn: 105, verses: 6, seer: 'kāṇvau parvatanāradau', divinity: 'pavamānaḥ somaḥ', meter: 'uṣṇik'},
        {mandala: 9, hymn: 106, verses: 14, seer: '(1-3,10-14)cākṣuṣo agniḥ,(4-6)mānavaścakṣuḥ,(7-9)cāpsavo manuḥ', divinity: 'pavamānaḥ somaḥ', meter: 'uṣṇik'},
        {mandala: 9, hymn: 107, verses: 26, seer: 'saptarṣayaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-2,4-7,10-15,17-26)pragāthaḥ,(3)dvipadā virāṭ,(8-9)bṛhatī,(16)dvipadā virāṭ'},
        {mandala: 9, hymn: 108, verses: 16, seer: '(1-2)śāktyo gaurivītiḥ,(3,14-16)vāsiṣṭhaḥ śaktiḥ,(4-5)āṅgirasa uruḥ,(6-7)bhāradvāja ṛjiśvā,(8-9)āṅgirasa ūrdhvasadmā,(10-11)āṅgirasaḥ kṛtayaśāḥ,(12-13)ṛṇañcayaḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-12,14-16)pragāthaḥ,(13)gāyatrī'},
        {mandala: 9, hymn: 109, verses: 22, seer: 'aiśvarayo dhiśṇyāgnayaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'dvipadā virāṭ'},
        {mandala: 9, hymn: 110, verses: 12, seer: 'traivṛṣṇastryaruṇaḥ paurukutsastrasadasyuḥ', divinity: 'pavamānaḥ somaḥ', meter: '(1-3)anuṣṭup,(4-9)bṛhatī,(10-12)virāṭ'},
        {mandala: 9, hymn: 111, verses: 3, seer: 'pārucchepiranānataḥ', divinity: 'pavamānaḥ somaḥ', meter: 'atyaṣtiḥ'},
        {mandala: 9, hymn: 112, verses: 4, seer: 'āṅgirasaḥ śiśuḥ', divinity: 'pavamānaḥ somaḥ', meter: 'paṅktiḥ'},
        {mandala: 9, hymn: 113, verses: 11, seer: 'mārīcaḥ kaśyapaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'paṅktiḥ'},
        {mandala: 9, hymn: 114, verses: 4, seer: 'mārīcaḥ kaśyapaḥ', divinity: 'pavamānaḥ somaḥ', meter: 'paṅktiḥ'},

        // MANDALA 10
        {mandala: 10, hymn: 1, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 2, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 3, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 4, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 5, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 6, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 7, verses: 7, seer: 'āptyastritaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 8, verses: 9, seer: 'tvāṣṭrastriśirāḥ', divinity: '(1-6)agniḥ,(7-9)indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 9, verses: 9, seer: 'sindhu dvīpaḥ', divinity: 'āpaḥ', meter: '(1-7)gāyatrī,(8-9)anuṣṭup'},
        {mandala: 10, hymn: 10, verses: 14, seer: '(1,3,5-7,11,13)vaivasvatī yamī,(2,4,8-10,12,14)vaivasvato yamaḥ', divinity: '(1,3,5-7,11,13)yamaḥ,(2,4,8-10,12,14)yamī', meter: '(1-12,14)triṣṭup,(13)virāṭ'},
        {mandala: 10, hymn: 11, verses: 9, seer: 'āṅgirhavirdhānaḥ', divinity: 'agniḥ', meter: '(1-6)jagatī,(7-9)triṣṭup'},
        {mandala: 10, hymn: 12, verses: 9, seer: 'āṅgirhavirdhānaḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 13, verses: 5, seer: 'ādityo vivasvān', divinity: 'havirdhāne śakaṭe', meter: '(1-4)triṣṭup,(5)jagatī'},
        {mandala: 10, hymn: 14, verses: 16, seer: 'vaivasvato yamaḥ', divinity: '(1-5,13-16)yamaḥ,(6-9)pitaraḥ,(10-12)sārameyau śvānau', meter: '(1-12)triṣṭup,(13-14,16)anuṣṭup,(15)bṛhatī'},
        {mandala: 10, hymn: 15, verses: 14, seer: 'yāmāyanaḥ śaṅkhaḥ', divinity: 'pitaraḥ', meter: '(1-10,12-14)triṣṭup,(11)jagatī'},
        {mandala: 10, hymn: 16, verses: 14, seer: 'yāmāyanaḥ damanaḥ', divinity: 'agniḥ', meter: '(1-10)triṣṭup,(11-14)anuṣṭup'},
        {mandala: 10, hymn: 17, verses: 14, seer: 'yāmāyano devaśravāḥ', divinity: '(1-2)saraṇyūḥ,(3-6)pūṣā,(7-9)sarasvatī,(10-14)āpaḥ', meter: '(1-12)triṣṭup,(13-14)anuṣṭup'},
        {mandala: 10, hymn: 18, verses: 14, seer: 'yāmāyanaḥ saṁkusukaḥ', divinity: '(1-4)mṛtyuḥ,(5)dhātā,(6)tvaṣṭā,(7-14)pitṛmedhaḥ', meter: '(1-12)paṅktiḥ,(13)jagatī,(14)anuṣṭup'},
        {mandala: 10, hymn: 19, verses: 8, seer: 'yāmāyano mathito', divinity: 'gāvaḥ', meter: '(1-5,7-8)anuṣṭup,(6)gāyatrī'},
        {mandala: 10, hymn: 20, verses: 10, seer: 'aindraḥ prājapatyaḥ', divinity: 'agniḥ', meter: '(1,9)virāṭ,(2)anuṣṭup,(3-8)gāyatrī,(10)triṣṭup'},
        {mandala: 10, hymn: 21, verses: 8, seer: 'aindraḥ prājapatyaḥ', divinity: 'agniḥ', meter: 'paṅktiḥ'},
        {mandala: 10, hymn: 22, verses: 15, seer: 'aindraḥ prājapatyaḥ', divinity: 'indraḥ', meter: '(1-4,6,8,10-14)bṛhatī,(5,7,9)anuṣṭup,(15)triṣṭup'},
        {mandala: 10, hymn: 23, verses: 7, seer: 'aindraḥ prājapatyaḥ', divinity: 'indraḥ', meter: '(1,7)triṣṭup,(2-4,6)jagatī,(5)abhisāriṇī'},
        {mandala: 10, hymn: 24, verses: 6, seer: 'aindraḥ prājapatyaḥ', divinity: '(1-3)indraḥ,(4-6)aśvinau', meter: '(1-3)paṅktiḥ,(4-6)anuṣṭup'},
        {mandala: 10, hymn: 25, verses: 11, seer: 'aindraḥ prājapatyaḥ', divinity: 'somaḥ', meter: 'paṅktiḥ'},
        {mandala: 10, hymn: 26, verses: 9, seer: 'aindraḥ prājapatyaḥ', divinity: 'pūṣā', meter: '(1,4)uṣṇik,(2-3,5-9)anuṣṭup'},
        {mandala: 10, hymn: 27, verses: 24, seer: 'aindro vasukraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 28, verses: 12, seer: '(1)vasukrapatnī,(2,6,8,10,12)indraḥ,(3-5,7,9,11)aindro vasukraḥ', divinity: '(1,3-6,7,9,11)indraḥ,(2,6,8,10,12)vasukraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 29, verses: 8, seer: 'aindraḥ vasukraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 30, verses: 15, seer: 'ailūṣaḥ kavaṣaḥ', divinity: 'āpaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 31, verses: 11, seer: 'ailūṣaḥ kavaṣaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 32, verses: 9, seer: 'ailūṣaḥ kavaṣaḥ', divinity: 'indraḥ', meter: '(1-5)jagatī,(6-9)triṣṭup'},
        {mandala: 10, hymn: 33, verses: 9, seer: 'ailūṣaḥ kavaṣaḥ', divinity: '(1)viśvedevāḥ,(2-3)indraḥ,(4-5)dānastutiḥ,(6-9)maitrātithirupamaśravāḥ', meter: '(1)triṣṭup,(2-3)pragāthaḥ,(4-9)gāyatrī'},
        {mandala: 10, hymn: 34, verses: 14, seer: 'ailūṣaḥ kavaṣaḥ', divinity: '(1,7,9,12)akṣāḥ,(2-6,8,10-11,14)akṣakitavanindā,(13)kṛṣiḥ', meter: '(1-6,8-14)triṣṭup,(7)jagatī'},
        {mandala: 10, hymn: 35, verses: 14, seer: 'dhānāko luśaḥ', divinity: 'viśvedevāḥ', meter: '(1-12)jagatī,(13-14)triṣṭup'},
        {mandala: 10, hymn: 36, verses: 14, seer: 'dhānāko luśaḥ', divinity: 'viśvedevāḥ', meter: '(1-12)jagatī,(13-14)triṣṭup'},
        {mandala: 10, hymn: 37, verses: 12, seer: 'sauryo abhitapāḥ', divinity: 'sūryaḥ', meter: '(1-9,11-12)jagatī,(10)triṣṭup'},
        {mandala: 10, hymn: 38, verses: 5, seer: 'muṣkavān indraḥ', divinity: 'indraḥ', meter: 'jagatī'},
        {mandala: 10, hymn: 39, verses: 14, seer: 'kākṣīvatī ghoṣā', divinity: 'aśvinau', meter: '(1-13)jagatī,(14)triṣṭup'},
        {mandala: 10, hymn: 40, verses: 14, seer: 'kākṣīvatī ghoṣā', divinity: 'aśvinau', meter: 'jagatī'},
        {mandala: 10, hymn: 41, verses: 3, seer: 'ghauṣeyaḥ suhastyaḥ', divinity: 'aśvinau', meter: 'jagatī'},
        {mandala: 10, hymn: 42, verses: 11, seer: 'āṅgirasaḥ kṛṣṇaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 43, verses: 11, seer: 'āṅgirasaḥ kṛṣṇaḥ', divinity: 'indraḥ', meter: '(1-9)jagatī,(10-11)triṣṭup'},
        {mandala: 10, hymn: 44, verses: 11, seer: 'āṅgirasaḥ kṛṣṇaḥ', divinity: 'indraḥ', meter: '(1-3,10-11)triṣṭup,(4-9)jagatī'},
        {mandala: 10, hymn: 45, verses: 12, seer: 'bhālandano vatsapriḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 46, verses: 10, seer: 'bhālandano vatsapriḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 47, verses: 8, seer: 'āṅgirasaḥ saptaguḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 48, verses: 11, seer: 'vaikuṇṭha indraḥ', divinity: 'indraḥ', meter: '(1-6,8-9)jagatī,(7,10-11)triṣṭup'},
        {mandala: 10, hymn: 49, verses: 11, seer: 'vaikuṇṭha indraḥ', divinity: 'indraḥ', meter: '(1,3-10)jagatī,(2,11)triṣṭup'},
        {mandala: 10, hymn: 50, verses: 7, seer: 'vaikuṇṭha indraḥ', divinity: 'indraḥ', meter: '(1-2,6-7)jagatī,(3-4)abhisāriṇī,(5)triṣṭup'},
        {mandala: 10, hymn: 51, verses: 9, seer: '(1,3,5,7,9)devāḥ,(2,4,6,8)saucīko agniḥ', divinity: '(1,3,5,7,9)agniḥ,(2,4,6,8)devāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 52, verses: 6, seer: 'saucīko agniḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 53, verses: 11, seer: '(1-3,6-11)devāḥ,(4-5)sauvīko agniḥ', divinity: '(1-3,6-11)agniḥ,(4-5)devāḥ', meter: '(1-5,8)triṣṭup,(6-7,9-11)jagatī'},
        {mandala: 10, hymn: 54, verses: 6, seer: 'vāmadevyo bṛhadukthaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 55, verses: 8, seer: 'vāmadevyo bṛhadukthaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 56, verses: 7, seer: 'vāmadevyo bṛhadukthaḥ', divinity: 'viśvedevāḥ', meter: '(1-3,7)triṣṭup,(4-6)jagatī'},
        {mandala: 10, hymn: 57, verses: 6, seer: 'bandhuḥ śrutabandhurviprabandhugaupāyanāḥ', divinity: 'viśvedevāḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 58, verses: 12, seer: 'bandhuḥ śrutabandhurviprabandhugaupāyanāḥ', divinity: 'āvartamānam manaḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 59, verses: 10, seer: 'bandhuḥ śrutabandhurviprabandhugaupāyanāḥ', divinity: '(1-4)nirṛtiḥ,(5-6)asunītiḥ,(7)svastayaḥ,(8-9,10)dyāvāpṛthivyau', meter: '(1-7)triṣṭup,(8-10)paṅktiḥ'},
        {mandala: 10, hymn: 60, verses: 12, seer: '(1-5,7-12)bandhuḥ śrutabandhurviprabandhugaupāyanāḥ,(6)agastyasvasā', divinity: '(1-4,6)asamātiḥ,(5)indraḥ,(7-11)subandhojīvaḥ,(12)bandhvādīnāṁ hastāḥ', meter: '(1-5)gāyatrī,(6-7,10-12)anuṣṭup,(8-9)paṅktiḥ'},
        {mandala: 10, hymn: 61, verses: 27, seer: 'mānavo nābhānediṣṭhaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 62, verses: 11, seer: 'mānavo nābhānediṣṭhaḥ', divinity: '(1-7)viśvedevāḥ,(8-11)dānastutiḥ', meter: '(1-4)jagatī,(5,8,9)anuṣṭup,(6-7)pragāthaḥ,(10)gāyatrī,(11)triṣṭup'},
        {mandala: 10, hymn: 63, verses: 17, seer: 'plāto gayaḥ', divinity: '(1-14,17)viśvedevāḥ,(15,16)pathyāsvastiḥ', meter: '(1-14)jagatī,(15-17)triṣṭup'},
        {mandala: 10, hymn: 64, verses: 17, seer: 'plāto gayaḥ', divinity: 'viśvedevāḥ', meter: '(1-11,13-15)jagatī,(12,16-17)triṣṭup'},
        {mandala: 10, hymn: 65, verses: 15, seer: 'vāsukro vasukarṇaḥ', divinity: 'viśvedevāḥ', meter: '(1-14)jagatī,(15)triṣṭup'},
        {mandala: 10, hymn: 66, verses: 15, seer: 'vāsukro vasukarṇaḥ', divinity: 'viśvedevāḥ', meter: '(1-14)jagatī,(15)triṣṭup'},
        {mandala: 10, hymn: 67, verses: 12, seer: 'āṅgiraso ayāsyaḥ', divinity: 'bṛhaspatiḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 68, verses: 12, seer: 'āṅgiraso ayāsyaḥ', divinity: 'bṛhaspatiḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 69, verses: 12, seer: 'vādhryaśvaḥ sumitraḥ', divinity: 'agniḥ', meter: '(1-2)jagatī,(3-12)triṣṭup'},
        {mandala: 10, hymn: 70, verses: 11, seer: 'vādhryaśvaḥ sumitraḥ', divinity: '(1-3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 71, verses: 11, seer: 'āṅgiraso bṛhaspatiḥ', divinity: 'jñānam', meter: '(1-8,10-11)triṣṭup,(9)jagatī'},
        {mandala: 10, hymn: 72, verses: 9, seer: 'laukya āṅgirasaḥ', divinity: 'devāḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 73, verses: 11, seer: 'śāktyo gaurivītiḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 74, verses: 6, seer: 'śāktyo gaurivītiḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 75, verses: 9, seer: 'praiyamedhaḥ sindhukṣit', divinity: 'nadyaḥ', meter: 'jagatī'},
        {mandala: 10, hymn: 76, verses: 8, seer: 'sārpa airāvato jaratkarṇaḥ', divinity: 'grāvāṇaḥ', meter: 'jagatī'},
        {mandala: 10, hymn: 77, verses: 8, seer: 'bhārgavaḥ syūmaraśmiḥ', divinity: 'marutaḥ', meter: '(1-4,6-8)triṣṭup,(5)jagatī'},
        {mandala: 10, hymn: 78, verses: 8, seer: 'bhārgavaḥ syūmaraśmiḥ', divinity: 'marutaḥ', meter: '(1,3-4,8)triṣṭup,(2,5-7)jagatī'},
        {mandala: 10, hymn: 79, verses: 7, seer: 'saucīko vaiśvānaraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 80, verses: 7, seer: 'saucīko vaiśvānaraḥ', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 81, verses: 7, seer: 'bhauvano viśvakarmā', divinity: 'viśvakarmā', meter: 'triṣṭup'},
        {mandala: 10, hymn: 82, verses: 7, seer: 'bhauvano viśvakarmā', divinity: 'viśvakarmā', meter: 'triṣṭup'},
        {mandala: 10, hymn: 83, verses: 7, seer: 'tāpaso manyuḥ', divinity: 'manyuḥ', meter: '(1)jagatī,(2-7)triṣṭup'},
        {mandala: 10, hymn: 84, verses: 7, seer: 'tāpaso manyuḥ', divinity: 'manyuḥ', meter: '(1-3)triṣṭup,(4-7)jagatī'},
        {mandala: 10, hymn: 85, verses: 47, seer: 'sāvitrī sūryā', divinity: '(1-5)somaḥ,(6-16)sūryāvivāhaḥ,(17)devāḥ,(18)somarkau,(19)candramāḥ,(20-31)vivāvahamantrāḥ,(32-47)sāvitrī sūryā', meter: '(1-13,15-17,22,25,28-33,35,38-42,45-47)anuṣṭup,(14,19-21,23-24,26,36-37,44)triṣṭup,(18,27,43)jagatī,(34)bṛhatī'},
        {mandala: 10, hymn: 86, verses: 23, seer: '(1,8,11-12,14,19-22)indraḥ,(2-6,9-10,15-18)indrāṇī,(7-13,23)vṛṣākapiḥ', divinity: 'indraḥ', meter: 'paṅktiḥ'},
        {mandala: 10, hymn: 87, verses: 25, seer: 'bhāradvājaḥ pāyuḥ', divinity: 'agniḥ', meter: '(1-21)triṣṭup,(22-25)anuṣṭup'},
        {mandala: 10, hymn: 88, verses: 19, seer: 'āṅgiraso mūrdhanvān', divinity: 'agniḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 89, verses: 18, seer: 'vaiśvāmitro reṇuḥ', divinity: '(1-4,6-18)indraḥ,(5)indrāsomau', meter: 'triṣṭup'},
        {mandala: 10, hymn: 90, verses: 16, seer: 'nārāyaṇaḥ', divinity: 'puruṣaḥ', meter: '(1-15)anuṣṭup,(16)triṣṭup'},
        {mandala: 10, hymn: 91, verses: 15, seer: 'vaitahavyo aruṇaḥ', divinity: 'agniḥ', meter: '(1-14)jagatī,(15)triṣṭup'},
        {mandala: 10, hymn: 92, verses: 15, seer: 'vaitahavyo aruṇaḥ', divinity: 'agniḥ', meter: '(1-14)jagatī,(15)triṣṭup'},
        {mandala: 10, hymn: 93, verses: 15, seer: 'mānavaḥ śāryātaḥ', divinity: 'viśvedevāḥ', meter: 'jagatī'},
        {mandala: 10, hymn: 94, verses: 14, seer: 'kādraveyaḥ sarpaḥ arbudaḥ', divinity: 'grāvāṇaḥ', meter: '(1-4,6,8-13)jagatī,(5,7,14)triṣṭup'},
        {mandala: 10, hymn: 95, verses: 18, seer: '(1,3,6,8-10,12,14,17)purūravāḥ,(2,4-5,7,11,13,15-16,18)urvaśī', divinity: '(1,3,6,8-10,12,14,17)urvaśī,(2,4-5,7,11,13,15-16,18)purūravāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 96, verses: 13, seer: 'āṅgiraso baruraindraḥ', divinity: 'hariḥ', meter: '(1-11)jagatī,(12-13)triṣṭup'},
        {mandala: 10, hymn: 97, verses: 23, seer: 'atharvaṇo bhiṣak', divinity: 'oṣadhayaḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 98, verses: 12, seer: 'ārṣṭiṣeṇo devāpiḥ', divinity: 'devāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 99, verses: 12, seer: 'vaikhānaso vamraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 100, verses: 12, seer: 'vāndano devasyuḥ', divinity: 'viśvedevāḥ', meter: '(1-11)jagatī,(12)triṣṭup'},
        {mandala: 10, hymn: 101, verses: 12, seer: 'saumyo budhaḥ', divinity: 'viśvedevāḥ', meter: '(1-3,7-8,10-11)triṣṭup,(4,6)gāyatrī,(5)bṛhatī,(9,12)jagatī'},
        {mandala: 10, hymn: 102, verses: 12, seer: 'bhāmyaśvo mudgalaḥ', divinity: 'indraḥ', meter: '(1,3,12)bṛhatī,(2,4-11)triṣṭup'},
        {mandala: 10, hymn: 103, verses: 13, seer: 'aindro apratirathaḥ', divinity: '(1-3,5-13)indraḥ,(4)bṛhaspatiḥ', meter: '(1-12)triṣṭup,(13)anuṣṭup'},
        {mandala: 10, hymn: 104, verses: 11, seer: 'vaiśvāmitro aṣṭakaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 105, verses: 11, seer: 'kautso durmitraḥ', divinity: 'indraḥ', meter: '(1)gāyatrī,(2,7)pipīlikamadhyā,(3-6,8-10)uṣṇik,(11)triṣṭup'},
        {mandala: 10, hymn: 106, verses: 11, seer: 'kāśyapo bhūtāṁśaḥ', divinity: 'aśvinau', meter: 'triṣṭup'},
        {mandala: 10, hymn: 107, verses: 11, seer: 'āṅgiraso divyaḥ', divinity: 'dakṣiṇā', meter: '(1-3,5-11)triṣṭup,(4)jagatī'},
        {mandala: 10, hymn: 108, verses: 11, seer: '(1,3,5,7,9)paṇayaḥ asurāḥ,(2,4,6,8,10-11)saramā', divinity: '(1,3,5,7,9)saramā,(2,4,6,8,10-11)paṇayaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 109, verses: 7, seer: 'juhūḥ', divinity: 'viśvedevāḥ', meter: '(1-5)triṣṭup,(6-7)anuṣṭup'},
        {mandala: 10, hymn: 110, verses: 11, seer: 'bhārgavo jamadagniḥ', divinity: '(1,2,3)agniḥ,(4)barhiḥ,(5)devīrdvāraḥ,(6)uṣāsānaktā,(7)daivyau hotārau,(8)sarasvatī-iḻā-bhāratī,(9)tvaṣṭā,(10)vanaspatiḥ,(11)svāhākṛtayaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 111, verses: 10, seer: 'vairūpo aṣṭrādaṁṣṭraḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 112, verses: 10, seer: 'vairūpo nabhaḥprabhedanaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 113, verses: 10, seer: 'vairūpaḥ śataprabhedanaḥ', divinity: 'indraḥ', meter: '(1-9)jagatī,(10)triṣṭup'},
        {mandala: 10, hymn: 114, verses: 10, seer: 'vairūpaḥ sadhristāpasaḥ', divinity: 'viśvedevāḥ', meter: '(1-3,5-10)triṣṭup,(4)jagatī'},
        {mandala: 10, hymn: 115, verses: 9, seer: 'vārṣṭihavya upastutaḥ', divinity: 'agniḥ', meter: '(1-7)jagatī,(8)triṣṭup,(9)śakvarī'},
        {mandala: 10, hymn: 116, verses: 9, seer: 'sthauro agniyutaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 117, verses: 9, seer: 'āṅgiraso bhikṣuḥ', divinity: 'dhanānnadānam', meter: '(1-2)jagatī,(3-9)triṣṭup'},
        {mandala: 10, hymn: 118, verses: 9, seer: 'āmahīyava urukṣayaḥ', divinity: 'rakṣohāgniḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 119, verses: 13, seer: 'indro labaḥ', divinity: 'ātmā', meter: 'gāyatrī'},
        {mandala: 10, hymn: 120, verses: 9, seer: 'atharvaṇo bṛhaddivaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 121, verses: 10, seer: 'prājapatyo hiraṇyagarbhaḥ', divinity: 'kaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 122, verses: 8, seer: 'vāsiṣṭhaścitramahāḥ', divinity: 'agniḥ', meter: '(1,5)triṣṭup,(2-4,6-8)jagatī'},
        {mandala: 10, hymn: 123, verses: 8, seer: 'bhārgavo venaḥ', divinity: 'venaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 124, verses: 9, seer: '(1,5-9)agnivaruṇasomāḥ,(2-4)agniḥ', divinity: '(1)agniḥ,(2-4)agnerātmā,(5,7-8)varuṇaḥ,(6)somaḥ,(9)indraḥ', meter: '(1-6,8-9)triṣṭup,(7)jagatī'},
        {mandala: 10, hymn: 125, verses: 8, seer: 'āmbhṛṇī vāk', divinity: 'ātmā', meter: '(1,3-8)triṣṭup,(2)jagatī'},
        {mandala: 10, hymn: 126, verses: 8, seer: 'śailūṣaḥ kulmalabarhiṣaḥ', divinity: 'viśvedevāḥ', meter: '(1-7)bṛhatī,(8)triṣṭup'},
        {mandala: 10, hymn: 127, verses: 8, seer: 'saubharaḥ kuśikaḥ', divinity: 'rātriḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 128, verses: 9, seer: 'āṅgiraso vihavyaḥ', divinity: 'viśvedevāḥ', meter: '(1-8)triṣṭup,(9)jagatī'},
        {mandala: 10, hymn: 129, verses: 7, seer: 'parameṣṭhī prajāpatiḥ', divinity: 'bhāvavṛttham', meter: 'triṣṭup'},
        {mandala: 10, hymn: 130, verses: 7, seer: 'prājapatyo yajña', divinity: 'bhāvavṛttam', meter: '(1)jagatī,(2-7)triṣṭup'},
        {mandala: 10, hymn: 131, verses: 7, seer: 'kākṣīvataḥ sukīrtiḥ', divinity: '(1-3,6-7)indraḥ,(4-5)aśvinau', meter: '(1-3,5-7)triṣṭup,(4)anuṣṭup'},
        {mandala: 10, hymn: 132, verses: 7, seer: 'nārmedhaḥ śakapūtaḥ', divinity: '(1)dyubhūmyaśvinaḥ,(2-7)mitrāvaruṇau', meter: '(1)nyaṅkurāriṇī,(2,6)prastārapaṅktiḥ,(3-5)virāṭ,(7)bṛhatī'},
        {mandala: 10, hymn: 133, verses: 7, seer: 'paijavanaḥ sudāḥ', divinity: 'indraḥ', meter: '(1-3)śakvarī,(4-6)paṅktiḥ,(7)triṣṭup'},
        {mandala: 10, hymn: 134, verses: 7, seer: '(1-5,6)yauvanāśvo māndhātā,(7)godhā', divinity: 'indraḥ', meter: 'paṅktiḥ'},
        {mandala: 10, hymn: 135, verses: 7, seer: 'yāmāyanaḥ kumāraḥ', divinity: 'yamaḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 136, verses: 7, seer: 'vātaśanāḥ', divinity: 'keśinaḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 137, verses: 7, seer: 'saptarṣayaḥ', divinity: 'viśvedevāḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 138, verses: 6, seer: 'auravo aṅgaḥ', divinity: 'indraḥ', meter: 'jagatī'},
        {mandala: 10, hymn: 139, verses: 6, seer: 'gandharvo viśvāvasuḥ', divinity: '(1-3)savitā,(4-6)ātmā', meter: 'triṣṭup'},
        {mandala: 10, hymn: 140, verses: 6, seer: 'pāvako agniḥ', divinity: 'agniḥ', meter: '(1-2)paṅktiḥ,(3-5)bṛhatī,(6)jyotiḥ'},
        {mandala: 10, hymn: 141, verses: 6, seer: 'tāpaso agniḥ', divinity: 'viśvedevāḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 142, verses: 8, seer: 'śārṅgāḥ', divinity: 'agniḥ', meter: '(1-2)jagatī,(3-6)triṣṭup,(7-8)anuṣṭup'},
        {mandala: 10, hymn: 143, verses: 6, seer: 'sāṅkhyo atriḥ', divinity: 'aśvinau', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 144, verses: 6, seer: 'tārkṣyaḥ suparṇaḥ', divinity: 'indraḥ', meter: '(1,3-4)gāyatrī,(2,5)bṛhatī,(6)paṅktiḥ'},
        {mandala: 10, hymn: 145, verses: 6, seer: 'indrāṇī', divinity: 'sapatnībādhanarūpo arthaḥ', meter: '(1-5)anuṣṭup,(6)paṅktiḥ'},
        {mandala: 10, hymn: 146, verses: 6, seer: 'airammado devamuniḥ', divinity: 'araṇyānī', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 147, verses: 5, seer: 'śairīṣiḥ suvedāḥ', divinity: 'indraḥ', meter: '(1-4)jagatī,(5)triṣṭup'},
        {mandala: 10, hymn: 148, verses: 5, seer: 'vainyaḥ pṛthuḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 149, verses: 5, seer: 'hairaṇyastūpaḥ arcan', divinity: 'savitā', meter: 'triṣṭup'},
        {mandala: 10, hymn: 150, verses: 5, seer: 'vāsiṣṭho mṛḻīkaḥ', divinity: 'agniḥ', meter: '(1-3)bṛhatī,(4-5)jyotiḥ'},
        {mandala: 10, hymn: 151, verses: 5, seer: 'kāmayānī śraddhā', divinity: 'śraddhā', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 152, verses: 5, seer: 'bhāradvājaḥ śāsaḥ', divinity: 'indraḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 153, verses: 5, seer: 'devajāmayaḥ indramātaraḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 154, verses: 5, seer: 'vaivasvatī yamī', divinity: 'bhāvavṛttam', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 155, verses: 5, seer: 'bhāradvājaḥ śirimbiṭhaḥ', divinity: '(1,4)alakṣmīghnaḥ,(2-3)brahmaṇaspatiḥ,(5)viśvedevāḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 156, verses: 5, seer: 'āgneyaḥ ketuḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 157, verses: 5, seer: 'āptyo bhuvanaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 158, verses: 5, seer: 'sauryaścakṣuḥ', divinity: 'sūryaḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 159, verses: 6, seer: 'paulomī śacī', divinity: 'śacī', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 160, verses: 5, seer: 'vaiśvāmitraḥ pūraṇaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 161, verses: 5, seer: 'prājāpatyo yakṣmanāśanaḥ', divinity: 'indrāgnī', meter: '(1-4)triṣṭup,(5)anuṣṭup'},
        {mandala: 10, hymn: 162, verses: 6, seer: 'brāhmo rakṣohā', divinity: 'garbhasmādhānarūpo arthaḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 163, verses: 6, seer: 'kāśyapo vivṛhā', divinity: 'yakṣmanāśanaḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 164, verses: 5, seer: 'āṅgirasaḥ pracetāḥ', divinity: 'duḥsvapnanāśanaḥ', meter: '(1-2,4)anuṣṭup,(3)triṣṭup,(5)paṅktiḥ'},
        {mandala: 10, hymn: 165, verses: 5, seer: 'nairṛtaḥ kapotaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 166, verses: 5, seer: 'vairājaḥ śākvaro', divinity: 'sapatnaghnarūpo arthaḥ', meter: '(1-4)anuṣṭup,(5)paṅktiḥ'},
        {mandala: 10, hymn: 167, verses: 4, seer: 'viśvāmitrajamadagnī', divinity: '(1-2,4)indraḥ,(3)viśvedevāḥ', meter: 'jagatī'},
        {mandala: 10, hymn: 168, verses: 4, seer: 'vātāyano anilaḥ', divinity: 'vāyuḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 169, verses: 4, seer: 'kākṣīvataḥ śabaraḥ', divinity: 'gāvaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 170, verses: 4, seer: 'sauryo vibhrāṭ', divinity: 'sūryaḥ', meter: '(1-3)jagatī,(4)paṅktiḥ'},
        {mandala: 10, hymn: 171, verses: 4, seer: 'bhārgavaḥ iṭaḥ', divinity: 'indraḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 172, verses: 4, seer: 'āṅgirasaḥ saṁvartaḥ', divinity: 'uṣāḥ', meter: 'virāṭ'},
        {mandala: 10, hymn: 173, verses: 6, seer: 'āṅgiraso dhruvaḥ', divinity: 'rājastutiḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 174, verses: 5, seer: 'āṅgiraso abhīvartaḥ', divinity: 'rājastutiḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 175, verses: 4, seer: 'arbudaḥ sārpaḥ', divinity: 'grāvāṇaḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 176, verses: 4, seer: 'arbhavaḥ sūnuḥ', divinity: '(1)ṛbhavaḥ,(2-4)agniḥ', meter: '(1,3-4)anuṣṭup,(2)gāyatrī'},
        {mandala: 10, hymn: 177, verses: 3, seer: 'prājāpatyaḥ pataṅgaḥ', divinity: 'māyābhedaḥ', meter: '(1)jagatī,(2-3)triṣṭup'},
        {mandala: 10, hymn: 178, verses: 3, seer: 'tārkṣyo ariṣṭanemiḥ', divinity: 'tārkṣyaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 179, verses: 3, seer: '(1)auśinaraḥ śibiḥ,(2)kāśirājaḥ pratardanaḥ,(3)rauhidaśvo vasumanāḥ', divinity: 'indraḥ', meter: '(1)anuṣṭup,(2-3)triṣṭup'},
        {mandala: 10, hymn: 180, verses: 3, seer: 'aindro jayaḥ', divinity: 'indraḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 181, verses: 3, seer: '(1)vāsiṣṭhaḥ prathaḥ,(2)bhāradvājaḥ saprathaḥ,(3)sauryo gharmaḥ', divinity: 'viśvedevāḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 182, verses: 3, seer: 'bārhaspatyastapurmūrdhā', divinity: 'bṛhaspatiḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 183, verses: 3, seer: 'prājāpatyaḥ prajāvān', divinity: '(1)yajamānaḥ,(2)yajamānapatnī,(3)hotrāśiṣaḥ', meter: 'triṣṭup'},
        {mandala: 10, hymn: 184, verses: 3, seer: 'garbhakartā tvaṣṭā', divinity: 'viśvedevāḥ', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 185, verses: 3, seer: 'vāruṇiḥ satyadhṛtiḥ', divinity: 'ādityāḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 186, verses: 3, seer: 'vātāyana ulaḥ', divinity: 'vāyuḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 187, verses: 5, seer: 'āgneyo vatsaḥ', divinity: 'agniḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 188, verses: 3, seer: 'āgneyaḥ śyenaḥ', divinity: 'jātavedā agniḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 189, verses: 3, seer: 'sārparājñī', divinity: 'sūryaḥ', meter: 'gāyatrī'},
        {mandala: 10, hymn: 190, verses: 3, seer: 'mādhucchandaso aghamarṣaṇaḥ', divinity: 'bhāvavṛttam', meter: 'anuṣṭup'},
        {mandala: 10, hymn: 191, verses: 4, seer: 'āṅgirasaḥ saṁvananaḥ', divinity: '(1)agniḥ,(2-4)sañjñānam', meter: '(1-2,4)anuṣṭup,(3)triṣṭup'},
    
];

/* ================================================================================
|| DATA FOR EXISTING & NEW FEATURES                                               ||
================================================================================ */

// --- Data for Deity Narrative Map ---
const deityNarrativeData = {
    'Indra': { 'Slaying Vṛtra (Release of Waters)': 40, 'Soma Drinking & Ritual Empowerment': 25, 'Battles with Dāsas/Dasyus': 20, 'Generosity (Maghavan)': 15 },
    'Agni': { 'Ritual Priest (Hotṛ) & Messenger (Dūta)': 35, 'Domestic Hearth Fire (Gṛhapati)': 25, 'Devourer of Oblations & Light Bringer': 20, 'Knower of All (Jātavedas)': 20 },
    'Soma': { 'The Sacred Plant & Ritual Drink': 50, 'The Deified Moon (Pavamāna)': 30, 'Inspiration for Poets & Vision': 15, 'Healer & Lord of Waters': 5 },
    'Varuṇa': { 'Upholder of Cosmic Order (Ṛta)': 45, 'Guardian of Oaths & Moral Law': 30, 'Association with Waters & the Sky': 15, 'Sin & Forgiveness': 10 },
    'Uṣas': { 'The Dawn, Bringer of Light': 55, 'Awakener of Life & Ritual': 25, 'Goddess of Wealth & Fortune': 15, 'Symbol of Transient Life': 5 }
    // Add more deities as needed
};

const deityNarrativeInfo = {
    'Indra': `<p><strong>Slaying Vṛtra:</strong> Indra's central myth involves defeating the serpent Vṛtra who withheld the cosmic waters (clouds), releasing rain and life. </p><p><strong>Soma Drinking:</strong> Soma empowers Indra, giving him strength for his cosmic battles and inspiring poetic visions.</p><p><strong>Battles with Dāsas:</strong> Indra is often depicted fighting against the Dāsas or Dasyus, figures sometimes interpreted as rival tribes or demonic forces opposing the Vedic order.</p><p><strong>Generosity (Maghavan):</strong> As 'Maghavan' (the Bountiful), Indra rewards his worshippers and patrons with wealth, especially cattle and horses.</p>`,
    'Agni': `<p><strong>Ritual Priest (Hotṛ):</strong> Agni acts as the divine priest, inviting the gods to the sacrifice and carrying the oblations to them. </p><p><strong>Domestic Hearth Fire (Gṛhapati):</strong> He is the 'Lord of the House,' protecting the home and family, central to domestic rituals.</p><p><strong>Devourer of Oblations:</strong> Agni consumes the offerings placed in the fire, transforming and transmitting them to the divine realm.</p><p><strong>Knower of All (Jātavedas):</strong> 'Jātavedas' signifies Agni's wisdom, knowing all beings and happenings, bridging the human and divine worlds.</p>`,
    'Soma': `<p><strong>The Sacred Plant & Drink:</strong> Soma refers both to a (likely now unidentified) plant and the intoxicating, inspiring drink extracted from it, central to Vedic ritual. </p><p><strong>The Deified Moon (Pavamāna):</strong> Especially in Mandala 9 ('Pavamāna' - flowing clear), Soma becomes associated with the moon, light, and celestial realms.</p><p><strong>Inspiration for Poets:</strong> Soma grants poets visions, eloquence, and the ability to compose hymns.</p>`,
    'Varuṇa': `<p><strong>Upholder of Cosmic Order (Ṛta):</strong> Varuṇa is the primary guardian of Ṛta, the cosmic and moral order. He oversees the natural laws and ethical conduct. </p><p><strong>Guardian of Oaths:</strong> He witnesses all actions and punishes falsehood and oath-breaking, often using his 'pāśa' (noose) to bind sinners.</p><p><strong>Association with Waters:</strong> Varuṇa is strongly linked to the celestial and terrestrial waters, ruling over the oceans and sky.</p>`,
    'Uṣas': `<p><strong>The Dawn, Bringer of Light:</strong> Uṣas is the beautiful goddess of the dawn, dispelling darkness, awakening life, and bringing hope. </p><p><strong>Awakener of Life:</strong> She rouses creatures from sleep, prompts people to their duties, and initiates the daily sacrifice.</p><p><strong>Symbol of Transient Life:</strong> As she appears daily but is ever-young, she also subtly reminds mortals of the passage of time and the transient nature of life.</p>`
};

// --- Data for Concept Evolution ---
const conceptEvolutionData = {
    'Indra': { type: 'Deity', prominence: [25, 28, 22, 28, 25, 30, 20, 22, 10, 15], info: "Indra peaks in the family books as a heroic warrior. His prominence lessens slightly in the 10th Maṇḍala." },
    'Agni': { type: 'Deity', prominence: [30, 18, 15, 12, 15, 12, 15, 18, 8, 10], info: "Agni is vital in all Maṇḍalas, especially the first. His role as the ritual fire makes him ubiquitous." },
    'Varuṇa': { type: 'Deity', prominence: [8, 5, 7, 6, 8, 5, 12, 6, 2, 4], info: "Varuṇa, an older sovereign god, is most prominent in Maṇḍala 7, exploring his ethical aspect." },
    'Soma': { type: 'Deity/Concept', prominence: [5, 5, 5, 5, 5, 5, 5, 5, 100, 5], info: "Soma's prominence explodes in Maṇḍala 9 (dedicated to 'Soma Pavamāna'). Present elsewhere as the ritual drink." },
    'Uṣas': { type: 'Deity', prominence: [10, 3, 5, 4, 6, 4, 6, 5, 1, 3], info: "The Goddess of Dawn, Uṣas, is celebrated poetically, especially in earlier Maṇḍalas." },
    'Viṣṇu': { type: 'Deity', prominence: [2, 1, 1, 2, 2, 1, 1, 2, 1, 4], info: "Viṣṇu is a minor deity in the Rig Veda, famous for his 'three strides'." },
    'Viśvāmitra (Rishi)': { type: 'Rishi', prominence: [5, 2, 70, 5, 3, 2, 4, 3, 2, 6], info: "Prominence based on hymns attributed to Viśvāmitra's family, peaking expectedly in Mandala 3." }, // Simulated
    'Yajña (Concept)': { type: 'Concept', prominence: [60, 55, 65, 50, 58, 62, 55, 50, 70, 45], info: "Simulated prominence of the core ritual concept across Mandalas, remaining consistently high but varying slightly." } // Simulated
};

// --- Data for Meter Evolution ---
const meterMandalaData = {
    labels: ['M 1', 'M 2', 'M 3', 'M 4', 'M 5', 'M 6', 'M 7', 'M 8', 'M 9', 'M 10'],
    Gāyatrī: [25, 5, 60, 15, 10, 10, 15, 30, 60, 20],
    Triṣṭubh: [40, 85, 20, 70, 75, 75, 70, 40, 5, 40],
    Jagatī: [15, 5, 5, 10, 10, 10, 10, 10, 2, 15],
    Anuṣṭubh: [10, 2, 5, 2, 2, 2, 2, 10, 3, 15],
    Other: [10, 3, 10, 3, 3, 3, 3, 8, 30, 10]
};

const meterRishiData = {
    'Gṛtsamada (M. 2)': { 'Gāyatrī': 5, 'Triṣṭubh': 90, 'Jagatī': 3, 'Other': 2 },
    'Viśvāmitra (M. 3)': { 'Gāyatrī': 65, 'Triṣṭubh': 25, 'Jagatī': 5, 'Other': 5 },
    'Vāmadeva (M. 4)': { 'Gāyatrī': 15, 'Triṣṭubh': 75, 'Jagatī': 5, 'Other': 5 },
    'Atri (M. 5)': { 'Gāyatrī': 10, 'Triṣṭubh': 80, 'Jagatī': 7, 'Other': 3 },
    'Bharadvāja (M. 6)': { 'Gāyatrī': 10, 'Triṣṭubh': 80, 'Jagatī': 5, 'Other': 5 },
    'Vasiṣṭha (M. 7)': { 'Gāyatrī': 15, 'Triṣṭubh': 75, 'Jagatī': 5, 'Other': 5 }
};

// --- Data for Conceptual Constellations (SIMULATED) ---
const conceptNetworkData = {
    'Ṛta (Cosmic Order)': {
        info: "<h4>Ṛta (ऋत) - Cosmic Order</h4><p>The fundamental principle of cosmic, ritual, and moral order that governs the universe. Varuṇa is its primary guardian. Its enemies are <strong>Anṛta</strong> (disorder, falsehood).</p>",
        nodes: [ { id: 1, label: 'Ṛta', value: 40, group: 0 }, { id: 2, label: 'Varuṇa', value: 25, group: 1 }, { id: 3, label: 'Agni', value: 20, group: 1 }, { id: 4, label: 'Satya (Truth)', value: 15, group: 0 }, { id: 5, label: 'Anṛta', value: 10, group: 2 }, { id: 6, label: 'Mitra', value: 10, group: 1 }, { id: 7, label: 'Path', value: 12, group: 3 } ],
        edges: [ { from: 1, to: 2, value: 10 }, { from: 1, to: 3, value: 8 }, { from: 1, to: 4, value: 7 }, { from: 1, to: 5, value: 4 }, { from: 1, to: 6, value: 3 }, { from: 1, to: 7, value: 5 }, { from: 2, to: 6, value: 2 } ]
    },
    'Yajña (Ritual)': {
        info: "<h4>Yajña (यज्ञ) - Ritual/Sacrifice</h4><p>The central activity of Vedic religion, a structured offering (often involving fire - Agni) intended to nourish the Devas and maintain Ṛta. Requires <strong>Mantra</strong> (sacred speech) and often <strong>Soma</strong> (sacred drink).</p>",
        nodes: [ { id: 1, label: 'Yajña', value: 40, group: 0 }, { id: 2, label: 'Agni', value: 30, group: 1 }, { id: 3, label: 'Indra', value: 25, group: 1 }, { id: 4, label: 'Soma', value: 28, group: 3 }, { id: 5, label: 'Mantra', value: 15, group: 0 }, { id: 6, label: 'Deva (Gods)', value: 18, group: 1 } ],
        edges: [ { from: 1, to: 2, value: 10 }, { from: 1, to: 3, value: 8 }, { from: 1, to: 4, value: 9 }, { from: 1, to: 5, value: 6 }, { from: 1, to: 6, value: 7 }, { from: 2, to: 4, value: 5 }, { from: 3, to: 4, value: 7 } ]
    },
    'Tapas (Austerity)': {
        info: "<h4>Tapas (तपस्) - Austerity/Heat</h4><p>Prominent in later hymns, Tapas represents creative 'heat,' ascetic power, or intense concentration. It's a force through which creation occurs and inner power is built by <strong>Rishis</strong>.</p>",
        nodes: [ { id: 1, label: 'Tapas', value: 25, group: 0 }, { id: 2, label: 'Creation', value: 15, group: 3 }, { id: 3, label: 'Rishi', value: 10, group: 1 }, { id: 4, label: 'Mandala 10', value: 12, group: 2 }, { id: 5, label: 'Yajña', value: 18, group: 0 } ],
        edges: [ { from: 1, to: 2, value: 8 }, { from: 1, to: 3, value: 6 }, { from: 1, to: 4, value: 5 }, { from: 1, to: 5, value: 3 } ]
    },
    'Vāk (Speech)': {
            info: "<h4>Vāk (वाक्) - Speech</h4><p>Sacred Speech, personified as a powerful goddess in Mandala 10. Crucial for the <strong>Yajña</strong> via <strong>Mantras</strong>. Associated with <strong>Sarasvatī</strong> and divine inspiration (Dhī).</p>",
            nodes: [ { id: 1, label: 'Vāk', value: 30, group: 0 }, { id: 2, label: 'Yajña', value: 25, group: 0 }, { id: 3, label: 'Mantra', value: 20, group: 0 }, { id: 4, label: 'Sarasvatī', value: 18, group: 1 }, { id: 5, label: 'Inspiration (Dhī)', value: 15, group: 0 }, { id: 6, label: 'Mandala 10', value: 10, group: 2 } ],
            edges: [ { from: 1, to: 2, value: 9 }, { from: 1, to: 3, value: 10 }, { from: 1, to: 4, value: 7 }, { from: 1, to: 5, value: 6 }, { from: 1, to: 6, value: 4 }, { from: 2, to: 3, value: 8 } ]
    },
    'Deva (God)': {
            info: "<h4>Deva (देव) - God</h4><p>The shining ones, recipients of the <strong>Yajña</strong>. Contrasted sometimes with <strong>Asuras</strong> (earlier gods/power-holders). Includes major figures like <strong>Indra</strong> and <strong>Agni</strong> who receive Soma.</p>",
            nodes: [ { id: 1, label: 'Deva', value: 35, group: 1 }, { id: 2, label: 'Yajña', value: 28, group: 0 }, { id: 3, label: 'Asura', value: 15, group: 2 }, { id: 4, label: 'Indra', value: 20, group: 1 }, { id: 5, label: 'Agni', value: 18, group: 1 }, { id: 6, label: 'Soma', value: 16, group: 3 } ],
            edges: [ { from: 1, to: 2, value: 10 }, { from: 1, to: 3, value: 5 }, { from: 1, to: 4, value: 8 }, { from: 1, to: 5, value: 7 }, { from: 2, to: 1, value: 9 }, { from: 2, to: 6, value: 6 } ]
    }
};

// --- Data for Socio-Material Analytics (SIMULATED) ---
const socioMaterialData = {
    animals: [ { name: 'Gau (Cow)', count: 250 }, { name: 'Aśva (Horse)', count: 210 }, { name: 'Aja (Goat)', count: 45 }, { name: 'Avi (Sheep)', count: 30 }, { name: 'Vṛka (Wolf)', count: 15 } ],
    socialRoles: [ { name: 'Rājan (King)', count: 120 }, { name: 'Purohita (Priest)', count: 110 }, { name: 'Viś (People/Tribe)', count: 90 }, { name: 'Kavi (Poet)', count: 70 }, { name: 'Dāsa (Servant/Foe)', count: 50 } ],
    valuables: { name: "Valuables", children: [ { name: "Cattle (Go)", value: 250 }, { name: "Horses (Aśva)", value: 210 }, { name: "Gold (Hiraṇya)", value: 80 }, { name: "Chariots (Ratha)", value: 65 }, { name: "Food/Grain (Anna)", value: 40 } ] },
    geography: [ { river: 'Sarasvatī', M1: 5, M2: 2, M3: 8, M4: 1, M5: 3, M6: 10, M7: 18, M8: 1, M9: 2, M10: 4 }, { river: 'Sindhu', M1: 8, M2: 1, M3: 2, M4: 3, M5: 1, M6: 2, M7: 4, M8: 6, M9: 1, M10: 7 }, { river: 'Paruṣṇī', M1: 2, M2: 0, M3: 0, M4: 1, M5: 2, M6: 0, M7: 5, M8: 1, M9: 0, M10: 1 }, { river: 'Yamunā', M1: 1, M2: 0, M3: 0, M4: 0, M5: 1, M6: 0, M7: 2, M8: 0, M9: 0, M10: 1 }, { river: 'Gaṅgā', M1: 0, M2: 0, M3: 0, M4: 0, M5: 0, M6: 1, M7: 0, M8: 0, M9: 0, M10: 1 } ]
};

// --- Data for Study Mode (PLACEHOLDERS/SAMPLES) ---
    const mandalaInfo = [
    { mandala: 1, rishis: "Mixed Rishis", deities: "Agni, Indra, Various", themes: "Diverse hymns, later additions" , icon: "🌌"},
    { mandala: 2, rishis: "Gṛtsamada", deities: "Indra, Agni, Rudra", themes: "Family book, strong Indra focus", icon: "⚡️" },
    { mandala: 3, rishis: "Viśvāmitra", deities: "Agni, Indra", themes: "Gāyatrī mantra origin, river hymns", icon: "🧘" },
    { mandala: 4, rishis: "Vāmadeva", deities: "Indra, Agni, Aśvins", themes: "Mystical hymns, Dadhikrā (divine horse)", icon: "🐎" },
    { mandala: 5, rishis: "Atri", deities: "Agni, Indra, Viśvedevāḥ", themes: "Systematic arrangement, hymns by women", icon: "🔥" },
    { mandala: 6, rishis: "Bharadvāja", deities: "Agni, Indra, Pūṣan", themes: "Focus on patrons (Divodāsa), Sarasvatī", icon: "🎁" },
    { mandala: 7, rishis: "Vasiṣṭha", deities: "Varuṇa, Indra, Mitra", themes: "Battle of Ten Kings, strong Varuṇa focus", icon: "👑" },
    { mandala: 8, rishis: "Kaṇva & Mixed", deities: "Indra, Aśvins, Ādityas", themes: "Unique meters (Pragātha), Vālakhilya", icon: "🎶" },
    { mandala: 9, rishis: "Various Soma Rishis", deities: "Soma Pavamāna", themes: "Entirely dedicated to Soma purification", icon: "💧" },
    { mandala: 10, rishis: "Mixed Rishis", deities: "Various, Philosophical", themes: "Creation hymns, later philosophical ideas", icon: "🧠" }
];

const quizQuestions = [ // Sample Questions
    { question: "Which Maṇḍala contains the famous Gāyatrī Mantra (RV 3.62.10)?", options: ["Maṇḍala 2", "Maṇḍala 3", "Maṇḍala 7", "Maṇḍala 10"], answer: "Maṇḍala 3" },
    { question: "The Battle of the Ten Kings (Dāśarājña) is primarily described in which Maṇḍala?", options: ["Maṇḍala 1", "Maṇḍala 5", "Maṇḍala 7", "Maṇḍala 9"], answer: "Maṇḍala 7" },
    { question: "Which Maṇḍala is entirely dedicated to Soma Pavamāna?", options: ["Maṇḍala 3", "Maṇḍala 6", "Maṇḍala 9", "Maṇḍala 10"], answer: "Maṇḍala 9" },
    { question: "The Gṛtsamada family is traditionally associated with which Maṇḍala?", options: ["Maṇḍala 2", "Maṇḍala 4", "Maṇḍala 6", "Maṇḍala 8"], answer: "Maṇḍala 2" },
    { question: "Philosophical hymns like the Nāsadīya Sūkta (Creation Hymn) are found predominantly in which Maṇḍala?", options: ["Maṇḍala 1", "Maṇḍala 5", "Maṇḍala 8", "Maṇḍala 10"], answer: "Maṇḍala 10" }
];

/* ================================================================================
|| END OF DATA SECTION                                                            ||
================================================================================ */


// --- Global State & Utility ---
const rootStyles = getComputedStyle(document.documentElement);
const accentColor = rootStyles.getPropertyValue('--accent').trim();
const textColor = rootStyles.getPropertyValue('--text-primary').trim();
const borderColor = rootStyles.getPropertyValue('--border-color').trim();

let activePanel = 'intro';
let geoMapInstance = null;
let analyticsDataCache = null; // Cache for analytics data
let lexiconState = { searchTerm: '' }; // State for lexicon search/filter
let lexiconGroups = { category: {} }; // Grouped lexicon data
// Study mode state variables
let currentQuestionIndex = 0, score = 0, questions = [];

const hasData = () => Array.isArray(rigVedaData) && rigVedaData.length > 1; // Check for more than just the placeholder
const hasLexiconData = () => Array.isArray(lexiconData) && lexiconData.length > 1; // Check for more than just the placeholder
const sanitize = (text) => (text || '').toString().trim();

const chartLayout = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: { color: textColor, family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' },
    margin: { t: 50, b: 60, l: 50, r: 20 },
    xaxis: { gridcolor: borderColor, zerolinecolor: borderColor, linecolor: borderColor, tickfont: { size: 12 }, titlefont: { size: 14 }},
    yaxis: { gridcolor: borderColor, zerolinecolor: borderColor, linecolor: borderColor, tickfont: { size: 12 }, titlefont: { size: 14 }},
    legend: { font: { size: 12 } }
};

// --- Mobile Navigation ---
const mobileNavToggle = document.getElementById('mobile-nav-toggle');
const sidebar = document.getElementById('sidebar');

if (mobileNavToggle && sidebar) {
    mobileNavToggle.addEventListener('click', () => {
        sidebar.classList.toggle('is-open');
        document.body.classList.toggle('nav-open');
    });
}

function closeMobileNav() {
    if (sidebar && sidebar.classList.contains('is-open')) {
        sidebar.classList.remove('is-open');
        document.body.classList.remove('nav-open');
    }
}

// --- Core Navigation ---
const panelInitFunctions = {
    'timeline': () => { if (hasData() && !document.getElementById('timelineChart').hasChildNodes()) renderRishiTimeline(); },
    'atlas': () => { if (hasData() && !document.getElementById('mandalaSelector').hasChildNodes()) setupAtlas(); },
    'analytics': () => { if (hasData() && !document.querySelector('#seg-themes .plotly')) triggerAnalyticsTab('themes'); },
    'narratives': () => { if (!document.getElementById('narrativeDeitySelector').hasChildNodes()) initNarrativeExplorer(); },
    'concept-evolution': () => { if (!document.getElementById('conceptEvolutionSelector').hasChildNodes()) initConceptEvolution(); },
    'meter-evolution': () => { if (!document.getElementById('meterMandalaAreaChart').hasChildNodes()) initMeterEvolution(); },
    'geomap': () => { if (hasData() && !geoMapInstance) initGeoMap('geoMapContainer'); },
    'concepts': () => { if (!document.getElementById('conceptSelector').hasChildNodes()) initConceptExplorer(); },
    'socio': initSocioMaterial, // Call every time
    'study': () => { if (document.getElementById('mandala-card-grid').childElementCount === 0) initStudyMode(); },
    'lexicon': () => { if (hasLexiconData() && document.getElementById('lexicon-content').childElementCount === 0) initLexicon(); }
};

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const panelId = btn.dataset.panel;
        if (activePanel === panelId && !sidebar.classList.contains('is-open')) return; // Avoid re-triggering if already active and nav closed

        activePanel = panelId;

        // Update button states
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Switch panels
        document.querySelectorAll('.panel').forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none'; // Ensure it's hidden before animation
        });
        const targetPanel = document.getElementById(`panel-${activePanel}`);
        if(targetPanel) {
            targetPanel.style.display = 'block'; // Make it visible
            // Force reflow before adding class for animation
            void targetPanel.offsetWidth;
            targetPanel.classList.add('active');
        }

        // Close mobile nav if open
        closeMobileNav();

        // Run initialization function for the activated panel
        if (panelInitFunctions[activePanel]) {
            try {
                panelInitFunctions[activePanel]();
            } catch (error) {
                console.error(`Error initializing panel "${activePanel}":`, error);
                // Optionally display an error message to the user in the panel
            }
        }
    });
});

// Helper to trigger analytics tab render
function triggerAnalyticsTab(segmentId) {
    const tabButton = document.querySelector(`#panel-analytics .analytic-tab[data-seg="${segmentId}"]`);
    if (tabButton) {
        tabButton.click(); // Simulate click to trigger rendering via its event listener
    } else {
        console.error(`Analytics tab button for segment "${segmentId}" not found.`);
    }
    }


// --- LEXICON FEATURE ---
function groupLexiconData() {
    lexiconGroups = { category: {} }; // Reset
    if (!hasLexiconData()) return;

    lexiconData.forEach(item => {
        // Simple category guess (can be improved)
        let category = "General";
        if (item.short_meaning.includes("deity") || item.short_meaning.includes("god")) category = "Deities";
        else if (item.short_meaning.includes("rishi") || item.word.includes(" Family")) category = "Rishis & Families";
        else if (item.short_meaning.includes("river")) category = "Geography";
        else if (item.short_meaning.includes("meter")) category = "Poetics & Ritual";
        else if (item.short_meaning.includes("sacrifice") || item.short_meaning.includes("ritual") || item.short_meaning.includes("priest")) category = "Poetics & Ritual";
        else if (item.root || item.short_meaning.includes("concept") || ["Ṛta", "Satya", "Tapas", "Vāk", "Deva", "Yajña"].some(c => item.word.includes(c))) category = "Concepts";

        if (!lexiconGroups.category[category]) {
            lexiconGroups.category[category] = [];
        }
        lexiconGroups.category[category].push(item);
    });

    // Sort categories and items within categories
    Object.keys(lexiconGroups.category).sort().forEach(category => {
        lexiconGroups.category[category].sort((a, b) => a.word.localeCompare(b.word));
    });
}

function renderLexicon() {
    const contentDiv = document.getElementById('lexicon-content');
    if (!contentDiv) return;
    contentDiv.innerHTML = ''; // Clear previous results

    const searchTerm = lexiconState.searchTerm.toLowerCase();
    const sortedCategories = Object.keys(lexiconGroups.category).sort();

    sortedCategories.forEach(category => {
        const itemsInCategory = lexiconGroups.category[category];
        const filteredItems = itemsInCategory.filter(item =>
            item.word.toLowerCase().includes(searchTerm) ||
            item.short_meaning.toLowerCase().includes(searchTerm) ||
            (item.root && item.root.toLowerCase().includes(searchTerm)) ||
            item.commentaries.some(c => c.meaning.toLowerCase().includes(searchTerm))
        );

        if (filteredItems.length > 0) {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'lexicon-accordion';
            accordionItem.innerHTML = `
                <div class="accordion-header">
                    <h3>${category}</h3>
                    <div>
                        <span class="count-badge">${filteredItems.length}</span>
                        <span class="indicator">+</span>
                    </div>
                </div>
                <div class="accordion-content">
                    <div class="decoder-grid">
                        ${filteredItems.map(item => `
                            <div class="decoder-card">
                                <div class="decoder-card-face decoder-front">
                                    <h3>${item.word}</h3>
                                    ${item.root ? `<p class="text-secondary"><em>Root: ${item.root}</em></p>` : ''}
                                    <p class="text-secondary">${item.short_meaning}</p>
                                </div>
                                <div class="decoder-card-face decoder-back lexicon-back">
                                    <h4>Commentaries:</h4>
                                    ${item.commentaries.map(c => `<p><strong>${c.source}:</strong> ${c.meaning}</p>`).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            contentDiv.appendChild(accordionItem);
        }
    });

    attachLexiconEventListeners(); // Re-attach listeners for new elements
}

function attachLexiconEventListeners() {
    // Accordion toggle
    document.querySelectorAll('.lexicon-accordion .accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const accordion = header.closest('.lexicon-accordion');
            accordion.classList.toggle('active');
        });
    });

    // Decoder card flip
    document.querySelectorAll('#lexicon-content .decoder-card').forEach(card => {
            // Check if listener already exists to prevent duplicates
        if (!card.dataset.listenerAttached) {
            card.addEventListener('click', function() {
                    this.classList.toggle('is-flipped');
            });
            card.dataset.listenerAttached = 'true'; // Mark as attached
        }
    });
}

function initLexicon() {
    const searchInput = document.getElementById('lexicon-search');
    if (!searchInput) return;

    groupLexiconData();
    renderLexicon(); // Initial render

    searchInput.addEventListener('input', (e) => {
        lexiconState.searchTerm = e.target.value;
        renderLexicon(); // Re-render on search
    });
}


// --- Rishi Timeline ---
const rishiCountSlider = document.getElementById('rishiCount');
const rishiCountLabel = document.getElementById('rishiCountLabel');

function renderRishiTimeline() {
    if (!hasData()) return;
    const numRishis = parseInt(rishiCountSlider.value);
    if (rishiCountLabel) rishiCountLabel.textContent = numRishis;

    const rishiCounts = rigVedaData.reduce((acc, hymn) => {
        const seer = sanitize(hymn.seer);
        if (seer && seer !== 'N/A' && !seer.includes(',')) { // Basic filter for simplicity
                acc[seer] = (acc[seer] || 0) + 1;
        }
        return acc;
    }, {});

    const sortedRishis = Object.entries(rishiCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, numRishis);

    // Simulate timeline position (simple grouping by Mandala - very approximate)
    const timelineData = sortedRishis.map(([rishi, count]) => {
        const firstMandala = rigVedaData.find(h => sanitize(h.seer) === rishi)?.mandala || 0;
        return {
            rishi,
            count,
            // Assign rough time periods based on Mandala (10=latest, 2-7=core family, 1/8=mixed)
            period: firstMandala === 10 ? 3 : (firstMandala >= 2 && firstMandala <= 7) ? 1 : 2
        };
    });

    const trace = {
        x: timelineData.map(d => d.period + Math.random()*0.4 - 0.2), // Jitter x-axis
        y: timelineData.map(d => d.rishi),
        mode: 'markers',
        marker: {
            size: timelineData.map(d => Math.sqrt(d.count) * 2), // Size based on count
            color: accentColor,
            opacity: 0.7
        },
        text: timelineData.map(d => `${d.rishi}<br>Hymns: ${d.count}`),
        hoverinfo: 'text',
        type: 'scatter'
    };

    const layout = {
            ...chartLayout,
            title: `Approximate Timeline Distribution of Top ${numRishis} Rishis`,
            xaxis: {
                title: 'Approximate Period (1=Core Family, 2=Mixed, 3=Late)',
                tickvals: [1, 2, 3],
                ticktext: ['Core Family', 'Mixed', 'Late']
            },
            yaxis: {
                title: 'Rishi',
                automargin: true // Adjust margin for long labels
            },
            hovermode: 'closest'
        };

    Plotly.newPlot('timelineChart', [trace], layout, {responsive: true});
}
if(rishiCountSlider) rishiCountSlider.addEventListener('input', renderRishiTimeline);


// --- Rishi Atlas ---
function setupAtlas() {
    if (!hasData()) return;
    const selector = document.getElementById('mandalaSelector');
    if (!selector) return;

    selector.innerHTML = ''; // Clear previous options
    [...Array(10).keys()].map(i => i + 1).forEach(num => {
        const option = document.createElement('option');
        option.value = num;
        option.textContent = `Maṇḍala ${num}`;
        selector.appendChild(option);
    });

    selector.addEventListener('change', (e) => renderMandalaPieChart(parseInt(e.target.value)));
    renderMandalaPieChart(1); // Initial render for Mandala 1
}

function renderMandalaPieChart(mandalaNumber) {
    if (!hasData()) return;
    const mandalaHymns = rigVedaData.filter(h => h.mandala === mandalaNumber);
    const rishiCounts = mandalaHymns.reduce((acc, hymn) => {
        const seer = sanitize(hymn.seer);
            if (seer && seer !== 'N/A' && !seer.includes(',')) { // Simple filter
                acc[seer] = (acc[seer] || 0) + 1;
            }
            return acc;
    }, {});

    const sortedRishis = Object.entries(rishiCounts).sort(([, a], [, b]) => b - a);
    const topRishis = sortedRishis.slice(0, 10); // Show top N
    const otherCount = sortedRishis.slice(10).reduce((sum, [, count]) => sum + count, 0);

    const labels = topRishis.map(([rishi]) => rishi);
    const values = topRishis.map(([, count]) => count);

    if (otherCount > 0) {
        labels.push('Other Rishis');
        values.push(otherCount);
    }

    const trace = {
        labels: labels,
        values: values,
        type: 'pie',
        hoverinfo: 'label+percent',
        textinfo: 'value',
        textfont_size: 14,
        marker: {
            // colors: ['#FF9933', '#FFB366', '#FFCC99', ...] // Optional custom colors
                line: { color: '#000000', width: 1 }
        },
        domain: { x: [0.1, 0.9], y: [0, 1] } // Adjust domain to prevent labels being cut off
    };

    const layout = {
        ...chartLayout,
        title: `Rishi Contribution in Maṇḍala ${mandalaNumber}`,
        showlegend: labels.length <= 15, // Show legend only if not too cluttered
        legend: { orientation: 'h', y: -0.1, yanchor: 'top'},
        margin: { t: 60, b: 40, l: 20, r: 20 },
        height: 600 // Increase height for better pie display
        };

    Plotly.newPlot('mandalaPieChart', [trace], layout, {responsive: true});
}

// --- Corpus Analytics ---
function getAnalyticsData() {
    if (!hasData()) return { counts: {}, hymns: [] };
    if (analyticsDataCache) return analyticsDataCache;

    const counts = {
        mandala: {}, hymn: {}, verse: {}, seer: {}, divinity: {}, meter: {}
    };
    let totalVerses = 0;
    const hymns = [];

    rigVedaData.forEach(h => {
        const m = h.mandala;
        const verses = h.verses || 0;
        const seer = sanitize(h.seer) || 'Unknown';
        // Simplified divinity parsing (takes first part if multiple)
        const divinityRaw = sanitize(h.divinity) || 'Unknown';
        const divinity = divinityRaw.includes(',') ? divinityRaw.split(',')[0].replace(/\(.*?\)/, '').trim() : divinityRaw;
        const meter = sanitize(h.meter) || 'Unknown';

        counts.mandala[m] = (counts.mandala[m] || 0) + 1;
        counts.seer[seer] = (counts.seer[seer] || 0) + 1;
        counts.divinity[divinity] = (counts.divinity[divinity] || 0) + 1;
        counts.meter[meter] = (counts.meter[meter] || 0) + 1;
        totalVerses += verses;

        hymns.push({ ...h, verses, seer, divinity, meter }); // Add processed data
    });

    // Add overall counts
    counts.hymn.total = rigVedaData.length;
    counts.verse.total = totalVerses;

    analyticsDataCache = { counts, hymns };
    return analyticsDataCache;
}

document.querySelectorAll('#panel-analytics .analytic-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        if (!hasData()) return; // Don't proceed if no data

        const segmentId = tab.dataset.seg;
        document.querySelectorAll('#panel-analytics .analytic-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        document.querySelectorAll('.analytics-segment').forEach(seg => {
            seg.style.display = seg.id === `seg-${segmentId}` ? 'block' : 'none';
            if(seg.id === `seg-${segmentId}`) {
                seg.classList.add('active'); // Keep active class for potential styling
            } else {
                seg.classList.remove('active');
            }
        });

        // Trigger rendering for the selected segment if not already rendered
        const segmentElement = document.getElementById(`seg-${segmentId}`);
        if (segmentElement && !segmentElement.querySelector('.plotly') && !segmentElement.querySelector('.vis-network')) {
                switch(segmentId) {
                    case 'themes':
                    if (!document.getElementById('theme-sliders').hasChildNodes()) setupThemeSliders();
                    renderThemeChart();
                    break;
                    case 'distributions':
                        renderDivinityChart('divChart');
                        renderMeterChart('meterChart');
                        break;
                    case 'adv-distributions':
                        renderDivinityHeatmap('divHeatmapChart');
                        renderVerseDistributionChart('verseDistChart');
                        break;
                    case 'network':
                        renderDeityNetwork('deityNetContainer');
                        break;
                }
        }
    });
});

function renderMeterChart(elementId) {
    const { counts } = getAnalyticsData();
    const sortedMeters = Object.entries(counts.meter)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 20); // Top 20

    const trace = {
        x: sortedMeters.map(([meter]) => meter),
        y: sortedMeters.map(([, count]) => count),
        type: 'bar',
        marker: { color: accentColor }
    };
    Plotly.newPlot(elementId, [trace], { ...chartLayout, title: 'Top 20 Meter Distribution', yaxis: {title: 'Hymn Count'}, xaxis: { tickangle: -45 }}, {responsive: true});
}

function renderDivinityChart(elementId) {
        const { counts } = getAnalyticsData();
        const sortedDivinities = Object.entries(counts.divinity)
            .filter(([divinity]) => divinity !== 'Unknown' && !divinity.includes('(')) // Basic filtering
            .sort(([, a], [, b]) => b - a)
            .slice(0, 20); // Top 20

        const trace = {
            x: sortedDivinities.map(([divinity]) => divinity),
            y: sortedDivinities.map(([, count]) => count),
            type: 'bar',
            marker: { color: accentColor }
        };
        Plotly.newPlot(elementId, [trace], { ...chartLayout, title: 'Top 20 Divinities (Primary)', yaxis: {title: 'Hymn Count'}, xaxis: { tickangle: -45 }}, {responsive: true});
}

function renderVerseDistributionChart(elementId) {
    const { hymns } = getAnalyticsData();
    const verseCounts = hymns.map(h => h.verses).filter(v => v > 0);

    const trace = {
        x: verseCounts,
        type: 'histogram',
        marker: { color: accentColor }
    };
        Plotly.newPlot(elementId, [trace], { ...chartLayout, title: 'Distribution of Verse Counts per Hymn', xaxis: {title: 'Number of Verses'}, yaxis: {title: 'Number of Hymns'}}, {responsive: true});
}

function renderDivinityHeatmap(elementId) {
        const { hymns } = getAnalyticsData();
        const heatmapData = {}; // { divinity: { M1: count, M2: count... } }
        const allDivinities = new Set();
        const mandalas = [...Array(10).keys()].map(i => i + 1);

        hymns.forEach(h => {
            const div = h.divinity;
            if (div === 'Unknown' || div.includes('(')) return; // Skip complex/unknown
            allDivinities.add(div);
            if (!heatmapData[div]) heatmapData[div] = {};
            heatmapData[div][`M${h.mandala}`] = (heatmapData[div][`M${h.mandala}`] || 0) + 1;
        });

        const sortedDivinities = Object.entries(heatmapData)
        .map(([div, counts]) => ({ div, total: Object.values(counts).reduce((s, c) => s + c, 0) }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 25) // Limit to top N for readability
        .map(d => d.div);


        const zData = sortedDivinities.map(div => mandalas.map(m => heatmapData[div]?.[`M${m}`] || 0));

        const trace = {
            z: zData,
            x: mandalas.map(m => `Mandala ${m}`),
            y: sortedDivinities,
            type: 'heatmap',
            colorscale: 'Oranges', //'Viridis',
            reversescale: true,
            hoverongaps: false
        };
        Plotly.newPlot(elementId, [trace], { ...chartLayout, title: 'Divinity Prominence by Mandala (Top 25)', yaxis: { automargin: true } }, {responsive: true});
}

function renderDeityNetwork(elementId) {
    const { hymns } = getAnalyticsData();
    const cooccurrences = {}; // { 'Deity1|Deity2': count }
    const deityCounts = {};

    // Simple co-occurrence: Check hymns with multiple deities listed (crude)
    hymns.forEach(h => {
        const rawDivinities = sanitize(h.divinity || '');
        if (rawDivinities.includes(',') || rawDivinities.includes('-')) {
                // Very basic split and clean
                const deities = rawDivinities.split(/[,-]/)
                    .map(d => d.replace(/\(.*?\)/, '').trim())
                    .filter(d => d && d !== 'Unknown');

                if (deities.length > 1) {
                    deities.forEach(d => { deityCounts[d] = (deityCounts[d] || 0) + 1; });
                    for (let i = 0; i < deities.length; i++) {
                        for (let j = i + 1; j < deities.length; j++) {
                            const key = [deities[i], deities[j]].sort().join('|');
                            cooccurrences[key] = (cooccurrences[key] || 0) + 1;
                        }
                    }
                }
        }
    });

    // Keep only frequently mentioned deities for clarity
    const minCount = 5;
    const filteredDeities = Object.keys(deityCounts).filter(d => deityCounts[d] >= minCount);

    const nodes = new vis.DataSet(
        filteredDeities.map((deity, i) => ({ id: i, label: deity, value: deityCounts[deity] }))
    );

    const deityIndex = Object.fromEntries(filteredDeities.map((d, i) => [d, i]));

    const edges = new vis.DataSet(
        Object.entries(cooccurrences)
        .map(([key, value]) => {
            const [d1, d2] = key.split('|');
            if (filteredDeities.includes(d1) && filteredDeities.includes(d2)) {
                return { from: deityIndex[d1], to: deityIndex[d2], value: value };
            }
            return null;
        })
        .filter(e => e !== null && e.value > 1) // Only show edges with >1 co-occurrence
    );

    const container = document.getElementById(elementId);
    const data = { nodes, edges };
        const options = {
            nodes: { shape: 'dot', font: { color: textColor }, scaling: { label: { min: 10, max: 25 } } },
            edges: { color: { color: '#ffffff55', highlight: accentColor }, smooth: { type: 'continuous' } },
            physics: { stabilization: true, barnesHut: { gravitationalConstant: -15000 } },
            interaction: { hover: true, tooltipDelay: 100 }
        };
    new vis.Network(container, data, options);
}

// --- Thematic Analysis Setup ---
const themeKeywords = {
    'Cosmic Order (Ṛta)': ['ṛta', 'satya', 'dharma', 'vrata', 'varuṇa'],
    'Ritual & Sacrifice (Yajña)': ['yajña', 'soma', 'agni', 'hotṛ', 'adhvara', 'barhis', 'svāhā'],
    'Battle & Victory': ['indra', 'vṛtra', 'dasyu', 'śūra', 'vajra', 'battle', 'conquer'],
    'Wealth & Prosperity': ['go', 'aśva', 'rāyaḥ', 'vasu', 'dhana', 'maghavan', 'pūṣan', 'bhaga'],
    'Nature & Elements': ['sūrya', 'uṣas', 'vāyu', 'parjanya', 'āpaḥ', 'pṛthivī', 'dyauḥ'],
    'Poetry & Inspiration': ['kavi', 'dhī', 'brahman', 'sarasvatī', 'vāc', 'stoma', 'uktha']
};

function setupThemeSliders() {
    if (!hasData()) return;
    const container = document.getElementById('theme-sliders');
    if (!container || container.hasChildNodes()) return; // Prevent re-creation

    Object.keys(themeKeywords).forEach((theme, index) => {
            const sliderId = `theme-slider-${index}`;
            const labelId = `theme-label-${index}`;
            const wrapper = document.createElement('div');
            wrapper.style.marginBottom = '0.5rem';
            wrapper.innerHTML = `
                <label for="${sliderId}" style="display: block; margin-bottom: 0.2rem; font-size: 0.9em;">${theme}: <span id="${labelId}">0</span>%</label>
                <input type="range" id="${sliderId}" data-theme="${theme}" min="0" max="100" value="0" style="width: 100%;">
            `;
            container.appendChild(wrapper);
            const slider = document.getElementById(sliderId);
            const label = document.getElementById(labelId);
            slider.addEventListener('input', (e) => {
                label.textContent = e.target.value;
                renderThemeChart(); // Re-render chart on slider change
            });
    });
    renderThemeChart(); // Initial render
}

    function renderThemeChart() {
        if (!hasData()) return;
        const { hymns } = getAnalyticsData();
        const sliders = document.querySelectorAll('#theme-sliders input[type="range"]');
        const activeThemes = {};
        sliders.forEach(slider => {
            const value = parseInt(slider.value);
            if (value > 0) {
                activeThemes[slider.dataset.theme] = value / 100.0; // Store threshold as 0-1
            }
        });

        const mandalaCounts = {}; // { M1: { total: N, match: M }, ... }
        for(let i = 1; i <= 10; i++) { mandalaCounts[`M${i}`] = { total: 0, match: 0 }; }

        hymns.forEach(hymn => {
            const mKey = `M${hymn.mandala}`;
            if (!mandalaCounts[mKey]) return; // Should not happen, but safeguard

            mandalaCounts[mKey].total++;
            let isMatch = false;

            if (Object.keys(activeThemes).length > 0) {
                // Check if hymn matches *any* active theme based on keywords in divinity/seer (simple check)
                const hymnText = `${hymn.divinity.toLowerCase()} ${hymn.seer.toLowerCase()}`;
                for (const theme in activeThemes) {
                    const threshold = activeThemes[theme];
                    // Simple match: does any keyword appear? (Could be weighted later)
                    if (themeKeywords[theme].some(kw => hymnText.includes(kw))) {
                        // Simple threshold check (currently just needs presence)
                        // For a % threshold, you'd need more complex analysis
                        isMatch = true;
                        break;
                    }
                }
            } else {
                isMatch = true; // If no sliders active, show all distribution
            }

            if (isMatch) {
                mandalaCounts[mKey].match++;
            }
        });

        const mandalas = Object.keys(mandalaCounts).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
        const percentages = mandalas.map(mKey => {
            const counts = mandalaCounts[mKey];
            return counts.total > 0 ? (counts.match / counts.total) * 100 : 0;
        });

        const trace = {
            x: mandalas.map(m => `Mandala ${m.slice(1)}`),
            y: percentages,
            type: 'bar',
            marker: { color: accentColor }
        };

        const layout = {
            ...chartLayout,
            title: 'Thematic Hymn Distribution Across Mandalas',
            yaxis: { title: 'Percentage of Mandala\'s Hymns Matching Theme(s) (%)' },
            xaxis: { title: 'Mandala' }
        };

        Plotly.react('themeChart', [trace], layout, {responsive: true}); // Use react for updates
    }


// --- Geographic Map ---
function initGeoMap(elementId) {
    if (!hasData() || geoMapInstance) return; // Prevent re-initialization
    const mapContainer = document.getElementById(elementId);
    const placeListContainer = document.getElementById('place-list-container');
    if (!mapContainer || !placeListContainer || !L) { // Check if Leaflet loaded
        console.error("Map container or Leaflet library not found.");
        return;
    }

    // Approximate locations (adjust as needed based on research)
    const locations = [
        { name: "Sarasvatī River", lat: 29.5, lon: 76.0, certainty: 'high', info: "Central sacred river, likely Ghaggar-Hakra." },
        { name: "Sindhu River (Indus)", lat: 31.0, lon: 71.0, certainty: 'high', info: "Major western river." },
        { name: "Paruṣṇī River (Ravi)", lat: 31.5, lon: 73.0, certainty: 'high', info: "Site of the Battle of Ten Kings." },
        { name: "Asiknī River (Chenab)", lat: 32.0, lon: 72.5, certainty: 'high', info: "One of the Punjab rivers." },
        { name: "Śutudrī River (Sutlej)", lat: 30.5, lon: 75.0, certainty: 'high', info: "Conversed with Viśvāmitra." },
        { name: "Vipāś River (Beas)", lat: 31.2, lon: 75.2, certainty: 'high', info: "Conversed with Viśvāmitra." },
        { name: "Vitastā River (Jhelum)", lat: 32.8, lon: 73.5, certainty: 'high', info: "Westernmost Punjab river mentioned." },
        { name: "Yamunā River", lat: 28.0, lon: 77.5, certainty: 'medium', info: "Mentioned less frequently, eastern river." },
        { name: "Gaṅgā River (Ganges)", lat: 27.0, lon: 79.0, certainty: 'low', info: "Mentioned rarely, signifies eastern expansion." },
        { name: "Kubhā River (Kabul)", lat: 34.5, lon: 69.0, certainty: 'medium', info: "Western river, modern Afghanistan." },
        { name: "Gomatī River (Gomal)", lat: 32.2, lon: 70.5, certainty: 'medium', info: "Western tributary of the Indus." }
    ];

        try {
            geoMapInstance = L.map(elementId).setView([30.0, 74.0], 5); // Center on Punjab region

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { // Using a dark theme tile
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                maxZoom: 18,
            }).addTo(geoMapInstance);

        let placeListHTML = '<ul class="place-list">';
        locations.forEach(loc => {
            const color = loc.certainty === 'high' ? accentColor : (loc.certainty === 'medium' ? '#FFA500' : '#FFD700'); // Orange variations
            L.marker([loc.lat, loc.lon], {
                    icon: L.divIcon({
                        className: 'custom-div-icon',
                        html: `<div style='background-color:${color};width:10px;height:10px;border-radius:50%;border:1px solid #fff;'></div>`,
                        iconSize: [10, 10],
                        iconAnchor: [5, 5]
                    })
                })
                .addTo(geoMapInstance)
                .bindPopup(`<b>${loc.name}</b><br>${loc.info || ''}`);
                placeListHTML += `<li>${loc.name}</li>`;
        });
        placeListHTML += '</ul>';
        placeListContainer.innerHTML = placeListHTML;

    } catch (error) {
        console.error("Error initializing Leaflet map:", error);
        mapContainer.innerHTML = "<p>Error loading map. Please ensure you are online and Leaflet library loaded correctly.</p>";
        geoMapInstance = null; // Reset instance on error
    }
}

// --- Fullscreen Modal Logic ---
const modal = document.getElementById('fullscreen-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.clickable-viz').forEach(el => {
    el.addEventListener('click', () => {
        if (!modal || !modalContent) return;
        const vizType = el.dataset.vizType;
        modalContent.innerHTML = `<div id="modal-viz-container" style="width:100%; height:100%;"></div>`; // Container for Plotly
        modal.style.display = 'flex';

        // Find the original chart's element ID to re-render
        const originalChartElement = el.querySelector('.chart-container, #deityNetContainer');
        if (!originalChartElement) return;
        const originalId = originalChartElement.id;

        // Re-render the specific chart type in the modal
            try {
                // Delay rendering slightly to ensure modal is visible
                setTimeout(() => {
                    switch (vizType) {
                        case 'divinity': renderDivinityChart('modal-viz-container'); break;
                        case 'meter': renderMeterChart('modal-viz-container'); break;
                        case 'divinity-heatmap': renderDivinityHeatmap('modal-viz-container'); break;
                        case 'verse-dist': renderVerseDistributionChart('modal-viz-container'); break;
                        case 'network': renderDeityNetwork('modal-viz-container'); break;
                        // Add cases for other clickable charts if needed
                        default: modalContent.innerHTML = 'Chart type not recognized for fullscreen.';
                    }
                    // Adjust layout for modal if needed (e.g., margins)
                    const plotDiv = document.getElementById('modal-viz-container');
                    if (plotDiv && plotDiv.classList.contains('js-plotly-plot')) {
                        Plotly.relayout(plotDiv, { 'margin.t': 80 }); // Add more top margin for close button
                    }
                }, 100);
            } catch(error) {
                console.error("Error rendering chart in modal:", error);
                modalContent.innerHTML = 'Error displaying chart in fullscreen.';
            }
    });
});
if (modalClose) modalClose.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
        if (modalContent) modalContent.innerHTML = ''; // Clear content
        // Important: Purge Plotly instance if it exists to free memory
        const plotDiv = document.getElementById('modal-viz-container');
        if (plotDiv && plotDiv.classList.contains('js-plotly-plot')) {
        Plotly.purge(plotDiv);
        }
        // Similar cleanup might be needed for Vis Network if it causes issues
});


// --- INTRO PAGE INTERACTIONS ---
function setupIntroInteractions() {
    // Stats update
    if (hasData()) {
        const { counts } = getAnalyticsData();
        document.getElementById('stat-mandalas').textContent = Object.keys(counts.mandala).length;
        document.getElementById('stat-hymns').textContent = counts.hymn.total;
        document.getElementById('stat-verses').textContent = counts.verse.total;
    } else {
            document.getElementById('stat-mandalas').textContent = '10'; // Default if no data
            document.getElementById('stat-hymns').textContent = 'N/A';
            document.getElementById('stat-verses').textContent = 'N/A';
    }

    // Decoder card flip
    document.querySelectorAll('#panel-intro .decoder-card').forEach(card => {
            // Check if listener already exists
            if (!card.dataset.listenerAttached) {
                card.addEventListener('click', function() {
                    this.classList.toggle('is-flipped');
                });
                card.dataset.listenerAttached = 'true';
            }
    });
}

// --- STUDY MODE ---
function initStudyMode() {
    const learnPhase = document.getElementById('study-learn-phase');
    const cardGrid = document.getElementById('mandala-card-grid');
    const startBtn = document.getElementById('start-quiz-btn');

    if (!cardGrid || !startBtn || cardGrid.childElementCount > 0) return; // Prevent re-init

    // Populate learning cards
    mandalaInfo.forEach(info => {
        const card = document.createElement('div');
        card.className = 'decoder-card';
        card.innerHTML = `
            <div class="decoder-card-face decoder-front">
                <div class="icon">${info.icon || '📖'}</div>
                <h3>Maṇḍala ${info.mandala}</h3>
                <p class="text-secondary">Key Rishis: ${info.rishis}</p>
            </div>
            <div class="decoder-card-face decoder-back">
                <ul class="info-list">
                    <li><strong>Primary Rishis:</strong> ${info.rishis}</li>
                    <li><strong>Major Deities:</strong> ${info.deities}</li>
                    <li><strong>Key Themes/Notes:</strong> ${info.themes}</li>
                </ul>
            </div>
        `;
            // Add flip listener for study cards
            if (!card.dataset.listenerAttached) {
            card.addEventListener('click', function() { this.classList.toggle('is-flipped'); });
            card.dataset.listenerAttached = 'true';
            }
        cardGrid.appendChild(card);
    });

    startBtn.addEventListener('click', startChallenge);
}

function startChallenge() {
    currentQuestionIndex = 0;
    score = 0;
    // Shuffle questions for variety
    questions = [...quizQuestions].sort(() => Math.random() - 0.5).slice(0, 5); // Take 5 random questions
    document.querySelector('#study-challenge-phase .quiz-controls').innerHTML = `
            <span id="quiz-score">Score: 0 / ${questions.length}</span>
            <button id="next-quiz-btn" class="styled-btn" disabled>Next Question</button>
    `;
    document.getElementById('next-quiz-btn').addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                endChallenge();
            }
    });
    displayQuestion();
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer || questions.length === 0) return;

    const q = questions[currentQuestionIndex];
    const optionsHTML = q.options.map(opt => `<button class="quiz-option">${opt}</button>`).join('');

    quizContainer.innerHTML = `
        <div class="quiz-question">(${currentQuestionIndex + 1}/${questions.length}) ${q.question}</div>
        <div class="quiz-options">${optionsHTML}</div>
        <div class="quiz-feedback"></div>
    `;

    document.querySelectorAll('.quiz-option').forEach(optionBtn => {
        optionBtn.addEventListener('click', () => checkAnswer(optionBtn));
    });
    document.getElementById('next-quiz-btn').disabled = true;
}

function checkAnswer(selectedOption) {
    const feedbackEl = document.querySelector('.quiz-feedback');
    const correctAnswer = questions[currentQuestionIndex].answer;
    const isCorrect = selectedOption.textContent === correctAnswer;

    document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.classList.add('disabled'); // Disable all options
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn === selectedOption) {
                btn.classList.add('incorrect');
            }
    });

    if (isCorrect) {
        score++;
        feedbackEl.textContent = 'Correct!';
        feedbackEl.style.color = 'var(--correct-color)';
    } else {
        feedbackEl.textContent = `Incorrect. The answer is: ${correctAnswer}`;
        feedbackEl.style.color = 'var(--incorrect-color)';
    }

    document.getElementById('quiz-score').textContent = `Score: ${score} / ${questions.length}`;
    document.getElementById('next-quiz-btn').disabled = false;
}

function endChallenge() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="quiz-question">Challenge Complete!</div>
        <div class="quiz-feedback" style="font-size: 1.5rem; color: var(--text-primary);">Your Score: ${score} / ${questions.length}</div>
    `;
    document.querySelector('#study-challenge-phase .quiz-controls').innerHTML = `
        <button id="restart-quiz-btn" class="styled-btn">Restart Challenge</button>
    `;
    document.getElementById('restart-quiz-btn').addEventListener('click', startChallenge);
}

// --- Deity Narrative Explorer ---
function initNarrativeExplorer() {
    const selector = document.getElementById('narrativeDeitySelector');
    if (!selector || selector.options.length > 0) return; // Prevent re-init

    Object.keys(deityNarrativeData).forEach(deity => {
        selector.add(new Option(deity, deity));
    });

    selector.addEventListener('change', (e) => renderNarrativeChart(e.target.value));
    renderNarrativeChart(selector.value); // Initial render
}

function renderNarrativeChart(deity) {
    const chartEl = document.getElementById('narrativeChart');
    const infoEl = document.getElementById('narrativeInfo');
    const data = deityNarrativeData[deity];
    const info = deityNarrativeInfo[deity];

    if (!chartEl || !data) return;

    const plotData = [{
        type: 'pie',
        values: Object.values(data),
        labels: Object.keys(data),
        textinfo: 'percent',
        hoverinfo: 'label+value',
        marker: { line: { color: '#000000', width: 1 } }
    }];

    const layout = { ...chartLayout, title: `Narrative Themes for ${deity}`, showlegend: true, legend: { orientation: 'h', y: -0.1, yanchor: 'top' } };
    Plotly.newPlot(chartEl, plotData, layout, {responsive: true});

    if (infoEl) {
            infoEl.innerHTML = info || `<p class="text-secondary">Detailed narrative information for ${deity} will appear here.</p>`;
    }
}

// --- Concept Evolution Explorer ---
function initConceptEvolution() {
    const selector = document.getElementById('conceptEvolutionSelector');
    if (!selector || selector.options.length > 0) return; // Prevent re-init

    Object.keys(conceptEvolutionData).forEach(concept => {
        selector.add(new Option(concept, concept));
    });

    selector.addEventListener('change', () => {
            // Limit selection logic
        if (selector.selectedOptions.length > 3) {
                alert('Please select a maximum of 3 items.');
                const selectedValues = Array.from(selector.selectedOptions).map(opt => opt.value).slice(0, 3);
                // Deselect excess options
                Array.from(selector.options).forEach(opt => {
                    opt.selected = selectedValues.includes(opt.value);
                });
            }
            renderConceptEvolutionChart();
    });

    // Pre-select first two items for demo
    if (selector.options.length > 0) selector.options[0].selected = true;
    if (selector.options.length > 1) selector.options[1].selected = true;
    renderConceptEvolutionChart();
}

function renderConceptEvolutionChart() {
    const chartEl = document.getElementById('conceptEvolutionChart');
    const infoEl = document.getElementById('conceptEvolutionInfo');
    const keyObsEl = document.getElementById('conceptEvolutionKeyObs');
    const selector = document.getElementById('conceptEvolutionSelector');
    if(!chartEl || !infoEl || !keyObsEl || !selector) return;

    const selectedConcepts = Array.from(selector.selectedOptions).map(opt => opt.value);
    const mainInfoPara = infoEl.querySelector('p:not(#conceptEvolutionKeyObs)');

    if (selectedConcepts.length === 0) {
        Plotly.purge(chartEl);
        if (mainInfoPara) mainInfoPara.textContent = 'Select one or more items (up to 3) to visualize their changing prominence.';
        if (keyObsEl) keyObsEl.innerHTML = 'Observations based on selected items will appear here.';
        return;
    }

    const plotData = [];
    let keyObsHTML = '';
    let infoHTML = '';

    selectedConcepts.forEach((concept) => {
        const data = conceptEvolutionData[concept];
        if (data) {
            plotData.push({
                x: Array.from({length: 10}, (_, i) => `Mandala ${i+1}`),
                y: data.prominence,
                type: 'scatter',
                mode: 'lines+markers',
                name: concept
            });
            infoHTML += `<h4>${concept} (${data.type || 'N/A'})</h4><p>${data.info}</p>`;
            const peakMandala = data.prominence.indexOf(Math.max(...data.prominence)) + 1;
            keyObsHTML += `<li><strong>${concept}</strong> shows peak prominence around Mandala ${peakMandala}.</li>`;
        }
    });

    const layout = { ...chartLayout, title: 'Concept Prominence Across Maṇḍalas', yaxis: {title: 'Relative Prominence (Score)'}, hovermode: 'x unified', legend: { orientation: 'h', y: -0.2, yanchor: 'top' } };
    Plotly.react(chartEl, plotData, layout, { responsive: true });

    if (mainInfoPara) mainInfoPara.innerHTML = infoHTML || '<p class="text-secondary">Select items to see details.</p>';
    if (keyObsEl) keyObsEl.innerHTML = selectedConcepts.length > 0 ? `<ul>${keyObsHTML}</ul>` : 'Observations based on selected items will appear here.';
}


// --- Meter Evolution Explorer ---
function initMeterEvolution() {
    renderMeterMandalaChart();
    setupRishiMeterSelector();
    renderMeterRishiChart();
}

function renderMeterMandalaChart() {
    const chartEl = document.getElementById('meterMandalaAreaChart');
    if (!chartEl) return;
    const meters = Object.keys(meterMandalaData).filter(k => k !== 'labels');

    const plotData = meters.map(meter => ({
        x: meterMandalaData.labels,
        y: meterMandalaData[meter],
        name: meter,
        type: 'scatter',
        mode: 'lines',
        stackgroup: 'one',
        line: { width: 1 }
    }));

    const layout = { ...chartLayout, title: 'Meter Composition by Maṇḍala (Stacked Area)', yaxis: {title: 'Percentage (%)'}, legend: { orientation: 'h', y: -0.2, yanchor: 'top' }, hovermode: 'x unified'};
    Plotly.newPlot(chartEl, plotData, layout, { responsive: true });
}

function setupRishiMeterSelector() {
        const selector = document.getElementById('rishiMeterSelector');
        if (!selector || selector.options.length > 0) return; // Prevent re-init

        Object.keys(meterRishiData).forEach(rishi => {
            selector.add(new Option(rishi, rishi));
        });

        // Pre-select some for initial view
        Array.from(selector.options).slice(0, 3).forEach(opt => opt.selected = true);

        selector.addEventListener('change', renderMeterRishiChart);
}

function renderMeterRishiChart() {
    const chartEl = document.getElementById('meterRishiChart');
    const selector = document.getElementById('rishiMeterSelector');
    if (!chartEl || !selector) return;

    const selectedRishis = Array.from(selector.selectedOptions).map(opt => opt.value);

    if (selectedRishis.length === 0) {
        Plotly.purge(chartEl); return;
    }

    const meters = ['Gāyatrī', 'Triṣṭubh', 'Jagatī', 'Other'];
    const plotData = meters.map(meter => ({
        x: selectedRishis,
        y: selectedRishis.map(rishi => meterRishiData[rishi]?.[meter] || 0), // Added safety check
        name: meter,
        type: 'bar'
    }));

    const layout = { ...chartLayout, barmode: 'group', title: 'Meter Preference by Ṛṣi Family', yaxis: {title: 'Percentage (%)'}, legend: { orientation: 'h', y: -0.3, yanchor: 'top' } };
    Plotly.react(chartEl, plotData, layout, { responsive: true });
}


// --- Conceptual Constellations ---
function initConceptExplorer() {
    const selector = document.getElementById('conceptSelector');
    if (!selector || selector.options.length > 0) return;

    Object.keys(conceptNetworkData).forEach(concept => {
        selector.add(new Option(concept, concept));
    });

    selector.addEventListener('change', (e) => renderConceptNetwork(e.target.value));
    if (selector.options.length > 0) {
            renderConceptNetwork(selector.value); // Render the first one initially
    }
}

function renderConceptNetwork(conceptName) {
    const container = document.getElementById('conceptNetworkGraph');
    const infoEl = document.getElementById('conceptInfo');
    const conceptData = conceptNetworkData[conceptName];

    if (!container || !infoEl || !conceptData || !vis) {
        console.error("Concept network container, data, or Vis.js library not found for:", conceptName);
        return;
    }

    try {
        const nodes = new vis.DataSet(conceptData.nodes);
        const edges = new vis.DataSet(conceptData.edges);
        const networkData = { nodes, edges };
        const options = {
                nodes: { shape: 'dot', font: { color: textColor, size: 16 }, scaling: { label: { min: 12, max: 30 } } },
                edges: { color: { color: '#ffffff55', highlight: accentColor }, smooth: false },
                physics: { stabilization: true, barnesHut: { gravitationalConstant: -25000 } },
                interaction: { hover: true, tooltipDelay: 100 },
                groups: {
                    0: { color: { background: accentColor, border: '#ffbf75' }, font: { color: '#000' } }, // Core Concept
                    1: { color: { background: '#4a90e2', border: '#7ab7ff' } }, // Deities/People
                    2: { color: { background: '#d0021b', border: '#ff5566' } }, // Antagonist/Location
                    3: { color: { background: '#7ed321', border: '#aaff66' } }  // Object/Action
                }
        };
        new vis.Network(container, networkData, options);
        infoEl.innerHTML = conceptData.info || `<p class="text-secondary">Details for ${conceptName} will appear here.</p>`;
    } catch (error) {
        console.error("Error rendering Vis Network:", error);
        container.innerHTML = "<p>Error rendering concept network.</p>";
    }
}


// --- Socio-Material Analytics ---
function initSocioMaterial() {
    const dashboard = document.getElementById('socioMaterialDashboard');
    if (!dashboard) return;

    // Check if inner divs exist, create if not
    if (!dashboard.querySelector('#socio-animals')) {
            dashboard.innerHTML = `
                <div id="socio-animals" class="chart-container card"></div>
                <div id="socio-social" class="chart-container card"></div>
                <div id="socio-valuables" class="chart-container card"></div>
                <div id="socio-geo" class="chart-container card"></div>
            `;
    }
    // Always attempt to render/re-render the charts when panel is activated
    renderSocioMaterialDashboard();
}

function renderSocioMaterialDashboard() {
    // Ensure the container divs exist before trying to plot
    if (!document.getElementById('socio-animals')) return;

    const { animals, socialRoles, valuables, geography } = socioMaterialData;

        try { // Wrap Plotly calls in try-catch
            // 1. Animal Importance (Bar Chart)
            const animalData = [...animals].sort((a,b) => b.count - a.count);
            Plotly.newPlot('socio-animals', [{
                y: animalData.map(a => a.name), x: animalData.map(a => a.count),
                type: 'bar', orientation: 'h', marker: { color: accentColor }
            }], { ...chartLayout, title: 'Animal Importance (Mentions)', margin: { l: 120, t: 60, b: 40, r: 20 } }, { responsive: true });

            // 2. Social Fabric (Bar Chart)
            const socialData = [...socialRoles].sort((a,b) => b.count - a.count);
            Plotly.newPlot('socio-social', [{
                x: socialData.map(s => s.name), y: socialData.map(s => s.count),
                type: 'bar', marker: { color: socialData.map((_,i) => i), colorscale: 'Plasma' }
            }], { ...chartLayout, title: 'Social Role Prominence', margin: { l: 50, t: 60, b: 80, r: 20 } }, { responsive: true });

            // 3. Vedic Wealth (Treemap)
            Plotly.newPlot('socio-valuables', [{
                type: 'treemap', labels: valuables.children.map(v => v.name),
                parents: valuables.children.map(() => valuables.name), values: valuables.children.map(v => v.value),
                textinfo: 'label+value+percent root', marker: { colorscale: 'Oranges' }
            }], { ...chartLayout, title: 'Components of Wealth', margin: { l: 20, t: 60, b: 20, r: 20 } }, { responsive: true });

            // 4. Geographic Focus (Heatmap)
            const riverNames = geography.map(r => r.river);
            const mandalas = Object.keys(geography[0]).filter(k => k.startsWith('M'));
            const zData = geography.map(river => mandalas.map(m => river[m]));
            Plotly.newPlot('socio-geo', [{
                z: zData, x: mandalas, y: riverNames, type: 'heatmap',
                colorscale: 'Cividis', reversescale: true
            }], { ...chartLayout, title: 'River Mentions by Mandala', yaxis: { autorange: 'reversed' }, margin: { l: 80, t: 60, b: 40, r: 20 } }, { responsive: true });

        } catch (error) {
            console.error("Error rendering socio-material charts:", error);
            // Optionally display error in the divs
            document.getElementById('socioMaterialDashboard').innerHTML = '<p>Error loading socio-material charts.</p>';
        }
}


// --- Initial Application Load ---
function initializeApp() {
    const introPanel = document.getElementById('panel-intro');

    if (!hasData() && !hasLexiconData()) {
        if (introPanel) introPanel.innerHTML = `<div class="panel-header" style="text-align: center;"><h2>Critical Data Missing</h2><p>Neither 'rigVedaData' nor 'lexiconData' could be found. Most features are disabled.</p></div>`;
        document.querySelectorAll('.nav-btn:not([data-panel="intro"])').forEach(btn => { btn.disabled = true; });
        return;
    }

    if (!hasData()) {
        // Disable only rigVedaData dependent features
        const coreFeatures = ['timeline', 'atlas', 'analytics', 'geomap'];
        document.querySelectorAll('.nav-btn').forEach(btn => {
                if (coreFeatures.includes(btn.dataset.panel)) {
                    btn.disabled = true;
                }
        });
        // Add warning message to intro panel if it exists
            if (introPanel && introPanel.querySelector('.intro-hero') && !introPanel.querySelector('.data-warning')) {
                introPanel.insertAdjacentHTML('afterbegin', `
                    <div class="panel-header data-warning" style="text-align: center; margin-bottom: 1rem;">
                        <h2 style="color: var(--incorrect-color);">Rig Veda Data Missing</h2>
                        <p style="color: var(--accent);">Warning: 'rigVedaData' array is empty or incomplete.</p>
                        <p>Core features (Timeline, Atlas, Corpus Analytics, GeoMap) are disabled. Paste data into the script tag to enable them.</p>
                        <p>Other features using simulated/lexicon data remain available.</p>
                    </div>
                    <hr class="section-divider">`);
            }
    } else {
            // If rigVedaData IS present, ensure core feature buttons are enabled
            const coreFeatures = ['timeline', 'atlas', 'analytics', 'geomap'];
            document.querySelectorAll('.nav-btn').forEach(btn => {
                if (coreFeatures.includes(btn.dataset.panel)) {
                    btn.disabled = false;
                }
            });
    }

    if (!hasLexiconData()) {
        // Disable only lexicon feature
        const lexiconButton = document.querySelector('.nav-btn[data-panel="lexicon"]');
        if (lexiconButton) lexiconButton.disabled = true;
            // Add warning if intro panel exists
            if (introPanel && introPanel.querySelector('.intro-hero') && !introPanel.querySelector('.lexicon-warning')) {
                introPanel.insertAdjacentHTML('beforeend', `
                    <hr class="section-divider">
                    <div class="panel-header lexicon-warning" style="text-align: center; margin-top: 1rem;">
                        <h3 style="color: var(--incorrect-color);">Lexicon Data Missing</h3>
                        <p>The 'Commentaries' feature is disabled because 'lexiconData' is empty.</p>
                    </div>`);
            }
    } else {
        // Ensure lexicon button is enabled if data is present
        const lexiconButton = document.querySelector('.nav-btn[data-panel="lexicon"]');
        if (lexiconButton) lexiconButton.disabled = false;
    }


    // Setup interactions that should run regardless of full data
    setupIntroInteractions();

    // Trigger initial load for the default active panel (intro) if needed
    // (setupIntroInteractions covers intro stats/cards)
}

// --- Run Initialization ---
try {
    initializeApp();
} catch (error) {
        console.error("Critical error during initial app load:", error);
        document.body.innerHTML = "<h1>Fatal Error</h1><p>Could not initialize the application. Check the console for details.</p>";
}

});
